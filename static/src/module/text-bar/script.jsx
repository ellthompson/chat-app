import React from 'react';

import './styling.scss';

function keyPressed(event) {
    if (event.keyCode === 13) {
        console.log(event.target.value);
        event.target.value = "";
    }
}

const TextBar = ({}) => (
    <div className="text-bar">
        <input type="text" onKeyUp={keyPressed}/>
    </div>
);

export default TextBar;
