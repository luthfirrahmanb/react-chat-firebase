import React, { Component } from 'react';
import { Link } from 'react-router';

class ToAddRoom extends Component {

    render() {
        return (
            <Link to={'/addroom'}>
                <button
                    className="btn btn-md btn-success">
                    Add New Channel
            </button>
            </Link>
        )
    }
}

export default ToAddRoom;
