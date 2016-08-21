
/*
 * App invoked actions
 */
export function textEntered(message) {
    return {
        type: 'TEXT_ENTERED',
        message
    };
}

export function setUsername(username) {
    return {
        type: 'SET_USERNAME',
        username
    };
}

/*
 * Server invoked actions
 */
export function messageReceived(message) {
    return {
        type: 'MESSAGE_RECEIVED',
        message
    };
}

export function updateUserList(users) {
    return {
        type: 'UPDATE_USER_LIST',
        users
    };
}
