var path = require('path');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var acceptConnections = require('./accept.js');

app.get('/', function(rq, rs) {
    rs.sendFile(path.join(__dirname, '../static/dist/html/index.html'));
});

app.use('/static', express.static('static'));

acceptConnections(io);

http.listen(3000, function(){
    console.log('Listening on *:3000');
});
