import React, { Component } from 'react';
import { connect } from 'react-redux';
import { roomRef } from '../firebase';
import { browserHistory } from 'react-router';

class AddRoom extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: ''
        }
    }

    addRoom() {
        const { name } = this.state;
        const { email } = this.props.user;
        roomRef.push({ name });
        browserHistory.push('/app');
    }


    render() {
        // console.log('this.props', this.props.user)
        return (
            <div className="form-inline">
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="add a Room"
                        className="form-control"
                        style={{ marginRight: '5px' }}
                        onChange={event => this.setState({ name: event.target.value })}
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                this.addRoom()
                            }
                        }} />
                    <button
                        className="btn btn-success"
                        type="button"
                        onClick={() => this.addRoom()}>
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    }
}
export default connect(mapStateToProps, null)(AddRoom);