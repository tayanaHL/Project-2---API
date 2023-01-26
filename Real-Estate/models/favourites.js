//SUBDOC//
const mongoose = require('../utils/connection')

const { Schema, model } = mongoose

const favouriteSchema = new Schema({
    favourite: {
     type: Boolean   
    } 
 })

 module.exports = favouriteSchema