
import { connect, disconnect } from "../configs/db.config.js";
import User from "../models/user.model.js";


/**
 * Function that find user
 * @param {String} _id - The _id prop of the user
 * @returns {Object} - The error object
 */
export default async function findUserById(_id) {
    try {
        await connect();
        const user = await User.findById(_id).select('-__v');
        return user;
    }
    catch (err) {
        return err;

    } finally {
        await disconnect();
    };
};