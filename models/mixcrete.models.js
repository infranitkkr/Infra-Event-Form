const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mixcreteSchema = new Schema({
    teamName: {
        type: String,
        required: true
    },
    teamLeaderName:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true
    },

});

const Mixcrete = mongoose.model('Mixcrete', mixcreteSchema);

export default Mixcrete;