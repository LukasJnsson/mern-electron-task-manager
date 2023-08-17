
import findTasksByUserId from "../services/findTasksByUserId.service.js";
import createTask from "../services/createTask.service.js";
import findTaskByIdAndUpdate from "../services/findTaskByIdAndUpdate.service.js";


/**
 * Function that get the tasks created by the authenticated user
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Object} next - The next middleware function
 */
export async function getTasksHandler(req, res, next) {
    try {
        const tasks = await findTasksByUserId(req.headers._id);
        res.status(200).json(tasks);
    }
    catch (err) {
        next(err);
    };
};


/**
 * Function that creates a task
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Object} next - The next middleware function
 */
export async function postTaskHandler(req, res, next) {
    try {
        await createTask(req.body);
        res.status(201);
    }
    catch (err) {
        next(err);
    };
};


/**
 * Function that updates a task 
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Object} next - The next middleware function
 */
export async function putTaskHandler(req, res, next) {
    try {
        await findTaskByIdAndUpdate(req.body);
        res.status(200);
    }
    catch (err) {
        next(err);
    };
};