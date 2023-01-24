

const mongoose = require('mongoose')

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
    favourite: [favouriteSchema] 
})
