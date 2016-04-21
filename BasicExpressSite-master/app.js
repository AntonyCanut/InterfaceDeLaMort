/*
 * Module dependencies
 */
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')

var logger = require('morgan');
var routes = require('./routes/index');
var about = require('./routes/about');

var app = express();

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib());
}

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(logger('dev'))
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'));

app.use('/', routes);
app.use('/about', about);

//
// app.get('/', function (req, res) {
//   res.render('index',
//   { title : 'Home' }
//   )
// })

app.listen(3000);
