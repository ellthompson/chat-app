import React from 'react';
import { connect } from 'react-redux';

import './styling.scss';
import { textEntered } from 'scripts/actions/script.js';

function keyPressed(textEntered, event) {
    if (event.keyCode === 13) {
        textEntered(event.target.value);
        event.target.value = "";
    }
}

const TextBar = ({textEntered}) => (
    <div className="text-bar">
        <input type="text" onKeyUp={(event) => {keyPressed(textEntered, event)}}/>
    </div>
);

const mapDispatchToProps = (dispatch) => {
    return {
        textEntered: (message) => {
            dispatch(textEntered(message));
        }
    };
}

export default connect(
    () => {return {};},
    mapDispatchToProps
)(TextBar);
