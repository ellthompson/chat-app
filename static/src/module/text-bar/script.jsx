import React from 'react';

import './styling.scss';

function keyPressed(textEntered, event) {
    if (event.keyCode === 13) {
        textEnrered(event.target.value);
        event.target.value = "";
    }
}

const TextBar = ({textEntered}) => (
    <div className="text-bar">
        <input type="text" onKeyUp={(event) => {keyPressed(textEntered, event)}}/>
    </div>
);

export default TextBar;
