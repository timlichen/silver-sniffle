var addQuestion_ctrl = require('../controllers/questionCtrl.js')
var addAnswer_Ctrl = require("./../controllers/answerCtrl.js");

module.exports = function(app) {

  app.post('/addQuestionToDB', function(req, res){
    console.log('made it to routes with question data: ', req.body);
    addQuestion_ctrl.addQuestion(req, res);
  })

  app.get("/questions", function(req, res) {
    console.log('got to routes all questions');
    addQuestion_ctrl.getAllQuestions(req, res);
  })

  app.get("/questions/:id", function(req, res) {
    console.log('got to routes getQuestion');
    addQuestion_ctrl.getQuestion(req, res);
  })

  app.post("/answer", function(req, res) {
    console.log('Answer Routes: ', req.body);
    addAnswer_Ctrl.addAnswer(req, res);
  })

  app.get("/like/:id", function(req, res){
    console.log('Answer Like Routes: ', req.body);
    addAnswer_Ctrl.likeAnswer(req, res);
  })

}