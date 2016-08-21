import React from 'react';
import { connect } from 'react-redux';
import './styling.scss';

const MessageLog = ({messages}) => (
    <div className="message-log">
        {
            messages.map((chatMessage, i) => {
                return <div key={i}>
                    <div className="title">{chatMessage.username}</div>
                    { chatMessage.text.map((text, i) => {
                        return <div key={i}>{text}</div>
                    })}
                </div>;
            })
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    };
}

export default connect(
    mapStateToProps,
    () => {return {};}
)(MessageLog);
