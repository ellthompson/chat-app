var socketMessages = require('./socket-messages.js');

module.exports = function(io, state) {
    io.on('connection', function(socket) {
        socketMessages(socket, io, state);
    });
};
