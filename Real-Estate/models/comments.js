
module.exports = mongoose

const mongoose = require('mongoose')

const { Schema, model } = mongoose

const commentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
}
})