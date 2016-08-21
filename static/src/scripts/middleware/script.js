export const socketioMiddleware = store => next => action => {

    if (action.type === 'SET_USERNAME') {
        window.socket.emit('user connected', action.username);
    }
    if (action.type === 'TEXT_ENTERED') {
        window.socket.emit('chat message', action.message);
    }
    return next(action);
};
