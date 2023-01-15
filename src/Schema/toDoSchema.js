const Mongoose = require('mongoose');

const { Schema } = Mongoose

const toDoSchema = new Schema({
    toDoItem: String,
    itemStatus: String, //active or completed
    isDeleted: Boolean,
})

const toDoModel = Mongoose.model('toDoItem', toDoSchema)

module.exports = {toDoModel} 