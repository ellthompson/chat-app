import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './styling.scss';
import store from 'scripts/store.js';
import TextBar from 'module/text-bar/script.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Provider store={store}>
                <div>
                    <TextBar/>
                </div>
            </Provider>
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
