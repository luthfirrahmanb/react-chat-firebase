import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { Link } from 'react-router';

class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            isLoading: false,
            password: '',
            confimPassword: '',
            error: {
                message: ''
            }
        }
    }

    signUp() {
        const { email, password, isLoading } = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
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
                <i className="fa fa-refresh fa-spin"></i> Submitting...
            </button>
        )
    }

    SignUpButton() {
        return (
            <button
                className="btn btn-md btn-primary"
                style={{ width: '130px' }}
                disabled={!this.validatePassword()}
                type="button"
                onClick={() => this.signUp()}>
                Sign Up
            </button>
        )
    }

    validatePassword(){
        const { password, confimPassword } = this.state;
        return(
            this.state.email.length > 0 &&
            this.state.password.length >= 6 &&
            password === confimPassword
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

                <h2>Sign Up</h2>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        style={{ marginRight: '5px' }}
                        placeholder="email"
                        onChange={event => this.setState({ email: event.target.value })} />
                    <input
                        type="password"
                        className="form-control"
                        style={{ marginRight: '5px' }}
                        placeholder="password"
                        onChange={event => this.setState({ password: event.target.value })} />
                    <input
                        type="password"
                        className="form-control"
                        style={{ marginRight: '5px' }}
                        placeholder="Confirm Password"
                        onChange={event => this.setState({ confimPassword: event.target.value })} />

                    {
                        !isLoading ?
                            this.SignUpButton()
                            :
                            this.loadingButton()

                    }
                </div>
                <div><Link to={'/signin'}>Already register? Let's Sign In</Link></div>
            </div>
        )
    }
}

export default SignUp;