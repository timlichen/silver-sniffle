var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new mongoose.Schema({
  // id: Number,
  username: String,
  text: {type: String, required: true, minlength: 10},
  description: String,
  answers: [{type: Schema.Types.ObjectId, ref: "answer"}],
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
})

var question = mongoose.model('question', questionSchema);