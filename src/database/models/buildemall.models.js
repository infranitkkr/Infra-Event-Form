import mongoose from "mongoose";

const Schema = mongoose.Schema;

const buildEmAll =  new Schema({
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
    teamMember1:{
        type: String,
        required: true
    },
    teamMember1RollNo:{
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
})

const BuildEmAll = mongoose.model('BuildEmAll', buildEmAll);

export default BuildEmAll;