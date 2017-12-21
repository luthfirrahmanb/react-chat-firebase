import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { roomRef } from '../firebase';
import { setChat } from '../actions';

class RoomDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: ''
        }
    }

    addChat() {
        const { message } = this.state;
        const { email } = this.props.user;

        let room = roomRef.child(`/${this.props.params.id}/chat`);
        let chat = room.push({ email, message });
    }

    componentDidMount() {
        let { dispatch } = this.props
        // let chatRef = roomRef.child(`/${this.props.params.id}/chat`).on;
        roomRef.child(`/${this.props.params.id}/chat`).on('value', snap => {
            let chats = [];
            snap.forEach(chat => {
                const { email, message } = chat.val()
                const serverKey = chat.key;
                chats.push({ email, message, serverKey });
                // console.log('chats', chat.val());
            })
            // console.log('chats', chats);
            dispatch(setChat(chats));
        })
    }



    render() {
        // console.log('this.props.user', this.props.user);
        // console.log('this.props.chats', this.props.chats);
        const chats = this.props.chats;
        return (
            <div>
                {
                    chats.map((chat, k) =>{
                        return(
                            <div key={k}>
                                <li>{chat.message}</li> <strong>By</strong> <span>{chat.email}</span>
                            </div>
                        )
                    })
                }
                <div className="form-inline">
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Messages"
                            className="form-control"
                            style={{ marginRight: '5px' }}
                            onChange={event => this.setState({ message: event.target.value })}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    this.addChat()
                                }
                            }} />
                        <button
                            className="btn btn-success"
                            type="button"
                            onClick={() => this.addChat()}>
                            Submit
                    </button>
                    <Link to={'/app'}>
                    <button
                            className="btn btn-danger"
                            type="button">
                            Back To Channel
                    </button>
                    </Link>
                    </div>
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