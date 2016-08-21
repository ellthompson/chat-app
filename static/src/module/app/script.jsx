import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import io from 'socket.io-client';

import store from 'scripts/store.js';

window.socket = io();
import socketListener from 'scripts/socketListener.js';
socketListener(store);
import Login from 'module/login/script.jsx';
import Chat from 'module/chat/script.jsx';

var reactRoot = document.createElement('div');
reactRoot.className = 'react__root';
document.body.appendChild(reactRoot);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/">
                <IndexRoute component={Login}/>
                <Route path="chat" component={Chat}/>
            </Route>
        </Router>
    </Provider>,
    reactRoot
);
