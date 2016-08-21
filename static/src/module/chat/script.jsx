import React from 'react';

import MessageLog from 'module/message-log/script.jsx';
import TextBar from 'module/text-bar/script.jsx';

import './styling.scss';

const Chat = ({}) => (
    <div className="chat">
        <MessageLog/>
        <TextBar/>
    </div>
);

export default Chat;
