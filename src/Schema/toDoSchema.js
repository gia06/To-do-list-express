const Mongoose = require('mongoose');

const { Schema } = Mongoose

const toDoSchema = new Schema({
    toDoItem: String,
    itemStatus: String,
    isDeleted: Boolean,
})

const toDOModel = Mongoose.model('toDoItem', toDoSchema)

module.exports = toDOModel