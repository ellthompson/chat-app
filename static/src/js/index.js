import io from 'socket.io-client';

var socket = io();

socket.on('accepted connection', function(msg){
    var connectedElement = document.createElement('h1');
    connectedElement.innerText = msg;
    document.body.appendChild(connectedElement);
});
