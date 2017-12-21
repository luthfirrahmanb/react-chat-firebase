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
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#">Ano Chat</a>
                        </div>
                        <div class="collapse navbar-collapse" id="myNavbar">
                            <ul class="nav navbar-nav navbar-right">
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