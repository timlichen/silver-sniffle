var mongoose = require('mongoose');
var question = mongoose.model('question');

module.exports = {
  addQuestion: function(req, res) {
    question.find({}, function(err, questions) {
      // idNum = questions.length;
      var questionInstance = new question({
        // id: idNum,
        text: req.body.text,
        description: req.body.description,
        answers: []
      });

      questionInstance.save(function(err, question){
        if (err) {
          res.json(err);
        } else {
          console.log("succesfully added new question");
          res.json({message: 'Question Added'});
        }
      });
    })
  },

  getAllQuestions: function(req, res) {
    question.find({}).populate('answers').exec(function(err, questions){
      if(err) {
        console.log('error on query');
      } else {
        console.log('got the questions');
        console.log(questions);
        res.json(questions);
      }
    });
  },

  getQuestion: function(req, res){
    console.log(req.params.id);
    question.findOne({_id: req.params.id}).populate('answers').exec(function(err, question) {
      if (err) {
        res.redirect("/");
      }else {
        console.log('found question, returning with object data');
        res.json(question);
      }
    });
  }


}
