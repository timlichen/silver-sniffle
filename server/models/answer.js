var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var answerSchema = new mongoose.Schema({
  username: String,
  text: {type: String, required: true, minlength: 5},
  descriptions: String,
  question: {type: Schema.Types.ObjectId, ref: "question"},
  likes: {type: Number, default: 0},
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
})

var answer = mongoose.model('answer', answerSchema);