var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/', function(req, res, next) {
  console.log("here")
  res.render('index', { title: 'Express' });
});

module.exports = router;
