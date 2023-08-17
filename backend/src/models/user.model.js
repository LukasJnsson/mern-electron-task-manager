
import mongoose from "mongoose";


const user = new mongoose.Schema({
    userId: {
        type: String,
        unique: true
    },
    username: String,
    joined: {
        type: Date,
        default: new Date()
    },
    userImage: String,
    authProvider: String
});


const User = mongoose.model('users', user);

export default User;