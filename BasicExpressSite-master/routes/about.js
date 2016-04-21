/*var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('About');
});

module.exports = router;
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about');
});

module.exports = router;
