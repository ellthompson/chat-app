export function textEntered(message) {
    return {
        type: 'TEXT_ENTERED',
        message
    };
}

export function messageReceived(message) {
    return {
        type: 'MESSAGE_RECEIVED',
        message
    };
}
