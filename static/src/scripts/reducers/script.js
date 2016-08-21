function messages(state = [], action) {
    let newState = [...state];
    switch(action.type) {
        case 'TEXT_ENTERED':
            if (state.length > 0 && action.message.username == state[0].username){
                newState[0].text.push(action.message.text);
            } else {
                newState =[
                    {
                        username: action.message.username,
                        text: [action.message.text]
                    },
                    ...newState
                ];
            }
            return newState;
        case 'MESSAGE_RECEIVED':
            if (state.length > 0 && action.message.username == state[0].username){
                newState[0].text.push(action.message.text);
            } else {
                newState =[
                    {
                        username: action.message.username,
                        text: [action.message.text]
                    },
                    ...newState
                ];
            }
            return newState;
        default:
            return state;
    }
}

function generateGuestUsername() {
    const randomNumber = Math.round(Math.random() * 1000000);
    return `Guest${randomNumber}`;
}

function username(state = generateGuestUsername(), action) {
    switch(action.type) {
        case 'SET_USERNAME':
            return action.username;
        default:
            return state;
    }
}

function users(state = [], action) {
    switch (action.type) {
        case 'UPDATE_USER_LIST':
            return action.users;
        default:
            return state;
    }
}

export default {
    messages,
    username,
    users
}
