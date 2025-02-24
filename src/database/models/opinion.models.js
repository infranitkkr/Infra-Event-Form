import mongoose from "mongoose";

const Schema = mongoose.Schema;

const opinion = new Schema({
	name: {
		type: String,
		required: true
	},
	rollNo:{
		type:Number,
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

const Opinion = mongoose.model('Opinion', opinion);

export default Opinion;