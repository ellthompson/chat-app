var _ = require('lodash');

module.exports = function() {
    var state = {
        connectedUsers: []
    };

    function getConnectedUsers() {
        return _.map(state.connectedUsers, function(user) {
            return user.username
        });
    };

    function addUser(username, id) {
        state.connectedUsers.push({
            username: username,
            id: id
        });
    }

    function removeUser(id) {
        var removed = _.remove(state.connectedUsers, function(user) {
            return user.id === id;
        });
    }

    return {
        getConnectedUsers: getConnectedUsers,
        addUser: addUser,
        removeUser: removeUser
    };
};
