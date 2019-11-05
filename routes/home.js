var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/games', function(req, res, next) {
  res.render('games', { title: 'Express' });
});

router.get('/desenvolvedores', function(req, res, next) {
  res.render('desenvolvedores', { title: 'Express' });
});

router.get('/distribuidores', function(req, res, next) {
  res.render('distribuidores', { title: 'Express' });
});

router.get('/game-single', function(req, res, next) {
  res.render('game-single', { title: 'Express' });
});

router.get('/search', function(req, res, next) {
  res.render('search', { title: 'Express' });
});


module.exports = router;
