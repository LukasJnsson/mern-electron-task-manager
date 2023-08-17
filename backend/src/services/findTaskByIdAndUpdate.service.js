
import { connect, disconnect } from "../configs/db.config.js";
import Task from "../models/task.model.js";


/**
 * Function that updates the completion status of a task
 * @param {Object} task - The task 
 * @returns {Object} - The error object
 */
export default async function findTaskByIdAndUpdate(task) {
    try {
        await connect();
        await Task.findByIdAndUpdate(task._id, { completed: task.completed });
    }
    catch (err) {
        return err;

    } finally {
        await disconnect();
    };
};