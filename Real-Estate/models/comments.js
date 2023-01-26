//SUBDOC//
const mongoose = require('../utils/connection')

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

module.exports = commentSchema