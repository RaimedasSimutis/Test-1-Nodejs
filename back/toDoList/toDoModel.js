const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true,
        unique: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})

//sukuriamm lentele
let ToDo = mongoose.model('Items', ToDoSchema)

module.exports = ToDo;