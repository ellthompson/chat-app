import React from 'react';
import { connect } from 'react-redux';

import './styling.scss';

const Users = ({users}) => (
    <div className="users">
        {
            users.map((user, i) => {
                return <div key={i}>{user}</div>;
            })
        }
    </div>
);

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

export default connect(
    mapStateToProps,
    () => {return {};}
)(Users);
