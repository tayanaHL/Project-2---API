const mongoose = require('../utils/connection')

const { Schema, model } = mongoose

// create the schema
const UserSchema = new Schema(
	{
		username: { 
			type: String, 
			required: true, 
			unique: true 
		},
		password: { 
			type: String, 
			required: true,
			minLength: 8
		}
	},
	{ timestamps: true }
)

// create the model
const User = model('User', UserSchema)

// export the model
module.exports = User
