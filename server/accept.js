var socketMessages = require('./socket-messages.js');

module.exports = function(io) {
    io.on('connection', function(socket) {
        socketMessages(socket, io);
    });
};
