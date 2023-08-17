
import { connect, disconnect } from "../configs/db.config.js";
import User from "../models/user.model.js";


/**
 * Function that find or create user
 * @param {Object} userProps - The props of the user
 * @returns {Object} - The error object
 */
export default async function findUserByIdOrCreate(userProps) {
    try {
        await connect();
        const query = { userId: userProps.userId };
        const options = { upsert: true, returnDocument: 'after' };

        const user = await User.findOneAndUpdate(query, userProps, options);
        return user;
    }
    catch (err) {
        return err;

    } finally {
        await disconnect();
    };
};