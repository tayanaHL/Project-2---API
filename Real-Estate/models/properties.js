const mongoose = require('../utils/connection')
const { url } = require('inspector')
const commentSchema = require('./comments')
const favouriteSchema = require('./favourites')
const { Schema, model } = mongoose

const propertiesSchema = new Schema({
    location: {
        type: String
    },
    images: {
        type: String
    },
    forSale: {
        type: Boolean
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
	comment: [commentSchema]
	,
    favourite: [favouriteSchema] 
})
const Properties = model('Property', propertiesSchema)
module.exports = Properties