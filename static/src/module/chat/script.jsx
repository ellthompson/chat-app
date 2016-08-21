import React from 'react';

import MessageLog from 'module/message-log/script.jsx';
import TextBar from 'module/text-bar/script.jsx';
import Users from 'module/users/script.jsx';

import './styling.scss';

const Chat = ({}) => (
    <div className="chat">
        <Users/>
        <div className="chat__area">
            <MessageLog/>
            <TextBar/>
        </div>
    </div>
);

export default Chat;
