
import { connect, disconnect } from "../configs/db.config.js";
import Task from "../models/task.model.js";


/**
 * Function that create task
 * @param {Object} task - The task 
 * @returns {Object} - The error object
 */
export default async function createTask(task) {
    try {
        await connect();
        await Task.create(task);

    } catch (err) {
        return err;

    } finally {
        await disconnect();
    };
};