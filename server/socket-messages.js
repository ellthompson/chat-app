module.exports = function(socket, io) {
    io.emit('accepted connection', 'Connected to socket.io instance!');
    socket.on('chat message', function(message) {
        socket.broadcast.emit('chat message', message);
    });
};
