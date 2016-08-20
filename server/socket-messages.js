module.exports = function(socket, io) {
    io.emit('accepted connection', 'Connected to socket.io instance!');
};
