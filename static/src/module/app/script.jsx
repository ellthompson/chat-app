import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import io from 'socket.io-client';

import './styling.scss';
import store from 'scripts/store.js';

window.socket = io();
import socketListener from 'scripts/socketListener.js';
socketListener(store);
import MessageLog from 'module/message-log/script.jsx';
import TextBar from 'module/text-bar/script.jsx';
import Login from 'module/login/script.jsx';

var reactRoot = document.createElement('div');
reactRoot.className = 'react__root';
document.body.appendChild(reactRoot);

ReactDOM.render(
    <Provider store={store}>
        <div className="app">
            <Login/>
            <MessageLog/>
            <TextBar/>
        </div>
    </Provider>,
    reactRoot
);
