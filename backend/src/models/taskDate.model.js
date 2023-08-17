
import mongoose from "mongoose";


const date = new mongoose.Schema({
    day: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    }
});


export default date;