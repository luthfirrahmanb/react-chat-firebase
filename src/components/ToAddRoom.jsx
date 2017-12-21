import React, { Component } from 'react';
import { Link } from 'react-router';
import AddRooms from './AddRoom';

class ToAddRoom extends Component {

    render() {
        return (
            <Link to={'/addroom'}>
                <button
                    className="btn btn-md btn-primary">
                    Add Room
            </button>
            </Link>
        )
    }
}

export default ToAddRoom;