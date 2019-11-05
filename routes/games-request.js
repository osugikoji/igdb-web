var express = require('express');
var assert = require('assert');
var restify = require('restify-clients');
var router = express.Router();

var client = restify.createJsonClient({
  url: 'https://internet-games-database.herokuapp.com'
});


router.get('/', function(req, res, next) {
  
  client.get('/games/catalog', function(err, request, response, obj) {
      assert.ifError(err);
      res.end(JSON.stringify(obj, null, 2));
  });

});

module.exports = router;
