var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');
var CommentSchema = new Schema({
    article_id: String,
    article_url: String,
    poster_name: String,
    text: String,
    date: {　type: Date, default: Date.now }
});

module.exports = mongoose.model('CommentModel', CommentSchema);
