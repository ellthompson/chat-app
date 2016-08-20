function messages(state = [], action) {
    switch(action.type) {
        case 'TEXT_ENTERED':
            return [...state, action.message];
        case 'MESSAGE_RECEIVED':
            return [...state, action.message];
        default:
            return state;
    }
}

export default {
    messages
}
