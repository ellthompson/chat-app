import React from 'react';
import ReactDOM from 'react-dom';

import './styling.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                The app has loaded
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

