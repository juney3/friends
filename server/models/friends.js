// load friends model
console.log('friends model');

// require mongoose
var mongoose = require('mongoose');

// create schema
var FriendSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	birthday: Date,
}, { timestamps: true });


// register friend schema
mongoose.model('Friend', FriendSchema);