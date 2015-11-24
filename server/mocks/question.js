var _ = require('lodash');

const questions = [
  {
    id: 'home',
    text: 'What brings you most happiness? Hometown or Country?',
    attributeA: 1,
    attributeB: 2
  },
  {
    id: 'work',
    text: 'What brings you most happiness? Work or School?',
    attributeA: 3,
    attributeB: 4
  }
]

module.exports = function(app) {
  var express = require('express');
  var questionRouter = express.Router();

  questionRouter.get('/', function(req, res) {
    res.send({'questions': questions});
  });

  questionRouter.get('/:id', function(req, res) {
    var question = _.where(questions, {id: req.params.id})[0]
    res.send({'question': question});
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/question', require('body-parser'));
  app.use('/api/questions', questionRouter);
};
