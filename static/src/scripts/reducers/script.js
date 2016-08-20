function messages(state = [], action) {
    switch(action.type) {
        case 'TEXT_ENTERED':
            return [...state, action.message]
        default:
            return state;
    }
}

export default {
    messages
}
