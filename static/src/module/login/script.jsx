import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { setUsername } from 'scripts/actions/script.js';

import './styling.scss'

function keyPressed(setUsername, event) {
    if (event.keyCode === 13) {
        setUsername(event.target.value);
        event.target.value = "";
        browserHistory.push('/chat');
    }
}

const Login = ({setUsername}) => (
    <div className="login">
        <div className="login__container">
            <span>Name: </span><input type="text" onKeyUp={(event) => {keyPressed(setUsername, event)}}/>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => {
    return {
        setUsername: (username) => {
            dispatch(setUsername(username));
        }
    };
}

export default connect(
    () => {return {};},
    mapDispatchToProps
)(Login);
