const swal = require('sweetalert2');
var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan     = require('morgan');
require('rainbow-console');
var request 	 = require("request");
//var cheerio = require('cheerio');
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

app.get('/', function(req, res) {

/*  var headers = {
      'User-Agent':       'Super Agent/0.0.1',
      'Content-Type':     'application/x-www-form-urlencoded'
  }

  var options = {
      url: 'http://zeta/informatica/num_datamar/directemar.htm',
      method: 'GET',
      headers: headers
      }
  request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
      console.log(body);
      var nombre;
      var $ = cheerio.load(body);
      console.log('prueba scraping 1');
          $('#table1').filter(function(){
                var data = $(this);
                // nombre = data.children().first().text();
                nombre = data.children().text();
                console.log('prueba scraping 2');
                console.log(nombre);
          })
    }
  });*/
  res.render('pages/zeta');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
