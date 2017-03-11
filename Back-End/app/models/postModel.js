var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('post', new Schema({
	title: {type: String},
	content: {type: String},
	status: {type: String},
  comments: {type : Array}
}));
