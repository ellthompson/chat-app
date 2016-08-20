import React from 'react';
import ReactDOM from 'react-dom';

import './styling.scss';
import TextBar from 'module/text-bar/script.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <TextBar/>
            </div>
        );
    }
};

var reactRoot = document.createElement('div');
reactRoot.className = 'react__root';
document.body.appendChild(reactRoot);

ReactDOM.render(
    <App/>,
    reactRoot
);

