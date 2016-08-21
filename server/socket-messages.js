module.exports = function(socket, io, state) {
    socket.on('user connected', function(message) {
        state.addUser(message, socket.id);
        io.emit('update user list', state.getConnectedUsers());
    });
    socket.on('disconnect', function() {
        state.removeUser(socket.id);
        io.emit('update user list', state.getConnectedUsers());
    });
    socket.on('chat message', function(message) {
        socket.broadcast.emit('chat message', message);
    });
};
