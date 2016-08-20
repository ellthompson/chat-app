import { messageReceived } from 'scripts/actions/script.js';

export default (store) => {
    window.socket.on('chat message', (message) => {
        store.dispatch(messageReceived(message));
    });
};
