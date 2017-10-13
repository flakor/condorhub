var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan     = require('morgan');
require('rainbow-console');
var request 	 = require("request");

var preueba = 'preuba';
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));



// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// app.set('view engine', 'html');

app.get('/index', function(request, response) {
  response.render('pages/index');
});

app.get('/cool', function(request, response) {
  console.error('error ctm');
  response.send(cool());
});



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
