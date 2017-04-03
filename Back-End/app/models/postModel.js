var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comments = new Schema({
	content: {type: String},
	nick_name: {type: String},
	comment_date: {type : Date}
})

module.exports = mongoose.model('post', new Schema({
	title: {type: String},
	content: {type: String},
	status: {type: String},
  comments: [Comments]
}));
