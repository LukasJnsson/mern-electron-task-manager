
import { connect, disconnect } from "../configs/db.config.js";
import Task from "../models/task.model.js";


/**
 * Function that find tasks by user
 * @param {String} _id - The _id prop of the user
 * @returns {Object} - The error object
 */
export default async function findTasksByUserId(_id) {
    try {
        await connect();
        const tasks = await Task.find({ userId: _id }).select('-__v');
        return tasks;
    }
    catch (err) {
        return err;

    } finally {
        await disconnect();
    };
};