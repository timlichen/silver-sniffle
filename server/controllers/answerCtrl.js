var mongoose = require('mongoose');
var question = mongoose.model('question');
var answer = mongoose.model('answer');

module.exports = {
  addAnswer: function(req, res){

    console.log("Answer Controller", req.body);

    question.findOne({_id: req.body.id}, function(err, questionData){ // FIND ONE

      console.log('this question: ', questionData);

      var answerInstance = new answer({
        question: req.body.id,
        text: req.body.text,
        description: req.body.description,
        username: req.body.username
      });

      // console.log(questionData.answers);

      questionData.answers.push(answerInstance);

      answerInstance.save(function(err, answer){
        if (err) {
          res.json(err);
        } else {
          console.log("Anwer Added");

          questionData.save(function(err){
            if(err) {
              res.json(err);
            } else {
              res.json({message: 'Answer Added'});
            }
          })
        }
      })
    });
  },

  likeAnswer: function(req, res){
    answer.findOne({_id : req.params.id}, function(err, answerData) {

      console.log('Like:', answerData);
      if(err){
        console.log(err);
      } else {
        console.log(answerData.likes);
        var addingLikes = ++answerData.likes;
        console.log(addingLikes);

        answer.update({_id: req.params.id}, {likes: addingLikes}, function(err) {
          if(err) {
            console.log('no likey');
          } else {
            console.log('likey');
            res.json({});
          }
        })
      }
    })
  }
}


