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
  res.render('contact');
});
router.post('/', function(req, res, next){
  res.render('contact', {
    Name: req.body.name,
    FirstName: req.body.firstName,
    Mail: req.body.mail,
    Message: req.body.message
  })
  // res.receiver.postMessage('Hello Treehouse!', 'http://demos.mattwest.io');
});

module.exports = router;
