import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }

    }

    signIn() {
        console.log('this.state', this.state);
        const { email, password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({ error })
            })
    }

    render() {
        return (
            <div className="form-inline" style={{ margin: '5%' }}>
                <h2>Sign In</h2>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        style={{ marginRight: '5px' }}
                        placeholder="email"
                        onChange={event => this.setState({ email: event.target.value })}
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                this.signIn()
                            }
                        }} />
                    <input
                        type="password"
                        className="form-control"
                        style={{ marginRight: '5px' }}
                        placeholder="password"
                        onChange={event => this.setState({ password: event.target.value })}
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                this.signIn()
                            }
                        }} />

                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => this.signIn()}>
                        Sign In
                    </button>
                </div>
                <div>{this.state.error.message}</div>
                <div><Link to={'/signup'}>Don't have any Account? Let's Sign Up!</Link></div>
            </div>
        )
    }
}

export default Login;