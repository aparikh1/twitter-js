var express = require('express');
var morgan = require('morgan');
var swig = require('swig');

var app = express();

//default setup
app.use(morgan('dev'))
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

//turn of swig caching
swig.setDefaults({ cache: false });

// swig.renderFile('./views/index.html', {
//     title: 'awesome people',
//     people: ['Paul', 'Jim', 'Jane']
// });

//gets
app.get('/', function (req, res) {
  // res.send('hello, world!')
  var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
  res.render( 'index', {title: 'Hall of Fame', people: people} );
})

app.get('/news', function (req, res) {
  res.send('news!')
})





var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});