import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { roomRef } from '../firebase';
import { setChat } from '../actions';
import * as moment from 'moment';

class RoomDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: '',
            time: moment(new Date()).format('hh:mm a (ddd, MMM YYYY)')
        }

    }

    addChat() {
        const { message, time } = this.state;
        const { email } = this.props.user;

        let room = roomRef.child(`/${this.props.params.id}/chat`);
        let chat = room.push({ email, message, time });
    }

    componentDidMount() {
        let { dispatch } = this.props
        // let chatRef = roomRef.child(`/${this.props.params.id}/chat`).on;
        roomRef.child(`/${this.props.params.id}/chat`).on('value', snap => {
            let chats = [];
            snap.forEach(chat => {
                const { email, message, time } = chat.val()
                const serverKey = chat.key;
                chats.push({ email, message, time, serverKey });
                // console.log('chats', chat.val());
            })
            // console.log('chats', chats);
            dispatch(setChat(chats));
        })
    }

    handleSubmit(e) {
        this.addChat()
        e.preventDefault();
        e.target.reset();
    }

    render() {
        // console.log('this.props.user', this.props.user);
        // console.log('this.props.chats', this.props.chats);
        const chats = this.props.chats;

        return (
            <div>
                <div style={{
                    height: '80%',
                    overflowX: 'hidden',
                    overflowY: 'scroll',
                    position: 'fixed',
                    width: '100%',
                    backgroundColor: 'black'
                }}>
                    {
                        chats.map((chat, k) => {
                            return (
                                <div key={k}>
                                    <div className="container" style={{ marginLeft: '3em', marginRight: '3em' }}>
                                        <p>{chat.message}</p>
                                        <span className="time-left"><strong>By</strong> {chat.email}</span>
                                        <span className="time-right">{chat.time}</span>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
                <div style={{ position: 'absolute', bottom: 30, margin: '2em' }}>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="form-inline" >
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Messages"
                                    className="form-control"
                                    size="160"
                                    onChange={event => this.setState({ message: event.target.value })}
                                />
                                <button
                                    className="btn btn-success"
                                    type="submit"
                                    style={{ marginLeft: '1em' }}>
                                    Send
                            </button>
                                <Link to={'/app'}>
                                    <button
                                        className="btn btn-danger"
                                        style={{ marginLeft: '1em' }}
                                        type="button">
                                        Back To Channel
                            </button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    const { user, chats } = state;
    return {
        user,
        chats
    }
}

export default connect(mapStateToProps, null)(RoomDetail);