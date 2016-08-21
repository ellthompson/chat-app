import { messageReceived, updateUserList } from 'scripts/actions/script.js';

export default (store) => {
    window.socket.on('chat message', (message) => {
        store.dispatch(messageReceived(message));
    });

    window.socket.on('update user list', (message) => {
        store.dispatch(updateUserList(message));
    });
};
