var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var app = express();
var controller = require('./db/controllers.js');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));


/*Having trouble with paths. Originally had index.html
& css folder in 'public' folder. Couldn't figure out how
to properly display react JS code for my app. So I moved
index file & CSS folder to root directory*/



/*
  If your index.html is on the root directory and you're 
  serving static files on Express (e.g. css or js files), 
  you need to specify the static path to those files with
  app.use:

  app.use('/css', express.static(__dirname + '/css') );
  app.use('/output', express.static(__dirname + '/output') );

*/
app.use('/css', express.static(__dirname + '/css') );
app.use('/output', express.static(__dirname + '/output') );


app.get('/', controller.getHomePage);

app.get('/list', controller.getEntireList);

app.post('/add', controller.addToList);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
