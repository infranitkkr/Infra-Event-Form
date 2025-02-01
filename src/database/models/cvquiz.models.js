import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cvquizSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rollNo:{
        type: number,
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

const Cvquiz = mongoose.model('Cvquiz', cvquizSchema);

export default Cvquiz;