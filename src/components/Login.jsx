import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';
import '../App.css'

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            isLoading: false,
            error: {
                message: ''
            }
        }

    }

    alertErrorMessage() {
        <div className="alert alert-danger">
            <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
        </div>
    }

    signIn() {
        const { email, password, isLoading } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({ error })
                this.setState({ isLoading: isLoading })
            })
        this.setState({ isLoading: true })
    }

    loadingButton() {
        return (
            <button
                className="btn btn-md btn-primary"
                style={{ width: '130px' }}
                disabled={true}>
                <i className="fa fa-refresh fa-spin"></i> LoggedIn...
            </button>
        )
    }

    LoginButton() {
        return (
            <button
                className="btn btn-md btn-primary"
                style={{ width: '130px' }}
                type="button"
                onClick={() => this.signIn()}>
                Login
            </button>
        )
    }

    render() {
        const { isLoading } = this.state;
        return (
            <div className="form-inline" style={{ margin: '5%' }}>

                {
                    this.state.error.message !== '' ?
                        <div className="alert alert-danger alert-dismissable">
                            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                            <strong>Failed!</strong> {this.state.error.message}
                        </div>
                        :
                        <div></div>
                }


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

                    {
                        !isLoading ?
                            this.LoginButton()
                            :
                            this.loadingButton()

                    }



                </div>
                <div><Link to={'/signup'}>Don't have any Account? Let's Sign Up!</Link></div>
            </div >
        )
    }
}

export default Login;