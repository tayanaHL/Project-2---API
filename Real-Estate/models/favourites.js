const mongoose = require('mongoose')

const { Schema, model } = mongoose

const favouriteSchema = new Schema({
    favourite: {
     type: Boolean   
    } 
 })

