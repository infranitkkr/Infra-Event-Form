import mongoose from "mongoose";

const Schema = mongoose.Schema;

const mixcreteSchema = new Schema({
    teamName: {
        type: String,
        required: true
    },
    teamLeader:{
        type: String,
        required: true
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

});

const Mixcrete = mongoose.model('Mixcrete', mixcreteSchema);

export default Mixcrete;