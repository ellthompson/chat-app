import io from 'socket.io-client';

import 'module/app/script.jsx';

var socket = io();

socket.on('accepted connection', function(msg){
    var connectedElement = document.createElement('h1');
    connectedElement.innerText = msg;
    document.body.appendChild(connectedElement);
});
