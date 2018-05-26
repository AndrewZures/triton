var express = require('express');
var router = express.Router();

router.get('/howdy', function(req, res, next) {
  res.render('index', { title: 'howdy' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ message: 'hooray! welcome to our api!' });   
});

module.exports = router;
