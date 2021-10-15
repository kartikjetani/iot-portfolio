const mongoose = require('mongoose');

const ideapitch = new mongoose.Schema({
	
	name: {
		type: String
	},

	email: {
		type: String
	},

	mobile: {
		type: Number
	},

	idea: {
		type: String
		/* required: true */
	},
	component: {
		type: String
		/* required: true, */
	}
})

const idea = mongoose.model('idea', ideapitch);
module.exports = idea;