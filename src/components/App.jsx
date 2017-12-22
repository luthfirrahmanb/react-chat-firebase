import React, { Component } from 'react';
import ToAddRoom from './ToAddRoom';
import RoomList from './RoomList';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import '../App.css'

class App extends Component {

    signOut() {
        firebaseApp.auth().signOut();
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Ano Chat</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav navbar-right">
                                <li><ToAddRoom /></li>
                                <li>
                                    <div style={{ marginTop: '1em', marginLeft: '1.1em' }}>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => this.signOut()}>
                                            Sign Out
                                    </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div align="center">
                    <RoomList />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log('state', state);
    return {}

}
export default connect(mapStateToProps, null)(App);