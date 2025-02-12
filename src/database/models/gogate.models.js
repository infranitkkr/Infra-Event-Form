import mongoose from "mongoose";

const Schema = mongoose.Schema;

const goGate = new Schema({
    name: {
        type: String,
        required: true
    },
    rollNo:{
        type: Number,
        required: true,
        unique: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    },
    number: {
        type: Number,
        required: true,
        unique: true
    },
    branch: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
})

const GoGate = mongoose.model('GoGate', goGate);

export default GoGate;