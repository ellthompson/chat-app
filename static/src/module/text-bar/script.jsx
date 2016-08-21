import React from 'react';
import { connect } from 'react-redux';

import './styling.scss';
import { textEntered } from 'scripts/actions/script.js';

function keyPressed(username, textEntered, event) {
    if (event.keyCode === 13) {
        textEntered({
            username,
            text: event.target.value
        });
        event.target.value = "";
    }
}

const TextBar = ({username, textEntered}) => (
    <div className="text-bar">
        <input type="text" onKeyUp={(event) => {keyPressed(username, textEntered, event)}}/>
    </div>
);

const mapStateToProps = (state) => {
    return {
        username: state.username
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        textEntered: (message) => {
            dispatch(textEntered(message));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TextBar);
