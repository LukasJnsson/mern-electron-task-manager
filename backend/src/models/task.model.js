
import mongoose from "mongoose";
import taskDate from "./taskDate.model.js";


const task = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    task: {
        type: String,
        required: true
    },
    dueDate: taskDate,
    completed: {
        type: Boolean,
        default: false
    }
});


const Task = mongoose.model('tasks', task);

export default Task;