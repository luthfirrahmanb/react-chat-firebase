import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
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
        roomRef.push({ name });
        browserHistory.push('/app');
    }


    render() {
        // console.log('this.props', this.props.user)
        return (
            <div className="form-inline" align="center" style={{ marginTop: '5em' }}>
                <h2>Add New Channel</h2>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="add a Channel"
                        className="form-control"
                        style={{ marginRight: '5px' }}
                        onChange={event => this.setState({ name: event.target.value })}
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                this.addRoom()
                            }
                        }} /><br />
                    <button
                        className="btn btn-success"
                        type="button"
                        onClick={() => this.addRoom()}
                        style={{ margin: '1em' }}>
                        Submit
                    </button>

                    <Link to={'/app'}>
                        <button
                            className="btn btn-danger"
                            type="button"
                            style={{ margin: '0.2em' }}>
                            Back To Channel
                    </button>
                    </Link>
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