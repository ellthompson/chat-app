import React from 'react';
import { connect } from 'react-redux';
import { setUsername } from 'scripts/actions/script.js';

function keyPressed(setUsername, event) {
    if (event.keyCode === 13) {
        setUsername(event.target.value);
        event.target.value = "";
    }
}

const Login = ({setUsername}) => (
    <div>
        <input type="text" onKeyUp={(event) => {keyPressed(setUsername, event)}}/>
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
