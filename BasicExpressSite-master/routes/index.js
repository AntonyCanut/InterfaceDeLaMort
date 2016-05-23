var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.post('/', function(req, res, next){
  var port = req.body.port;
  if (port == undefined)
    exec('./script/restart_nodejs_server');
  else{
    console.log(port);
    exec('./script/duplication_server ' + port, function(error, stdout, stderr) {
      console.log(stdout);
      console.log(error);
      console.log(stderr);
    });
    console.log('copie terminé');
    res.redirect('localhost:' + port);
  }
});

module.exports = router;
