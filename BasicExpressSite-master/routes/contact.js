var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', {
    IsHidden: "NoVisible"
  });
});
router.post('/', function(req, res, next){
  console.log(req.body);
  res.render('contact', {
    Name: req.body.name,
    FirstName: req.body.firstName,
    Mail: req.body.mail,
    Message: req.body.message,
    IsHidden: ""
  })
});

module.exports = router;
