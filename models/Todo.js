const mongoose = require('../db/connection')

const todoSchema = new mongoose.Schema({
    title: String,
    author: String,
    body: String,
    completed: Boolean
})

const todoModel = mongoose.model("todoModel", todoSchema)
module.exports = todoModel;