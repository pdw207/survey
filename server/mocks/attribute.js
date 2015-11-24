var _ = require('lodash');

const attributes = [
  {
    id: 1,
    text: 'Your Hometown',
    image: 'map.png'
  },
  {
    id: 2,
    text: 'Your Current Country',
    image: 'globe.png'
  },
  {
    id: 3,
    text: 'Work',
    image: 'building.png'
  },
  {
    id: 4,
    text: 'School',
    image: 'house.png'
  }
]

module.exports = function(app) {
  var express = require('express');
  var attributeRouter = express.Router();

  attributeRouter.get('/', function(req, res) {
    res.send({'attributes': attributes})
  });

  attributeRouter.get('/:id', function(req, res) {
    var id = parseInt(req.params.id)
    var attribute = _.where(attributes, {id: id})
    res.send({'attribute': attribute });
  });

  app.use('/api/attributes', attributeRouter);
};
