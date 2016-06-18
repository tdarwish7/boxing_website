var express = require('express')
var server = express();

server.use(express.static(__dirname+'/public'));

server.get('/', function(request, response){
  response.sendFile('public/html/index.html', {root: __dirname});
});

server.get('/contact', function(request, response){
  response.sendFile('public/html/contact.html', {root:__dirname});
});


server.listen(8080);
