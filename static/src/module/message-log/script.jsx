import React from 'react';
import { connect } from 'react-redux';
import './styling.scss';

const MessageLog = ({messages}) => (
    <div className="message-log">
        {
            messages.map((message, i) => {
                return <div key={i}>{message}</div>;
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
