import mongoose from "mongoose";

const Schema = mongoose.Schema;

const mixcreteSchema = new Schema({
    teamName: {
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
    teamLeader:{
        type: String,
        required: true
    },
    teamLeaderRollNo:{
        type: Number,
        required: true,
        unique: true
    },
    teamMember2:{
        type: String,
        required: true
    },
    teamMember2RollNo:{
        type: Number,
        required: true,
        unique: true
    },
    teamMember3:{
        type: String,
        required: true
    },
    teamMember3RollNo:{
        type: Number,
        required: true,
        unique: true
    }

});

const Mixcrete = mongoose.model('Mixcrete', mixcreteSchema);

export default Mixcrete;