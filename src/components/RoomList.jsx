import React, { Component } from 'react';
import { connect } from 'react-redux';
import { roomRef } from '../firebase';
import { setRooms } from '../actions';
import { Link } from 'react-router';
// import RoomItem from './RoomItem';


class RoomList extends Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        roomRef.on('value', snap => {
            let rooms = [];
            snap.forEach(room => {
                const { name } = room.val()
                const serverKey = room.key;
                rooms.push({ name, serverKey });
                // console.log('goal', room.val());
            })
            // console.log('rooms', rooms);
            this.props.setRooms(rooms);
        })
    }

    render(){
        // console.log('this.props', this.props.rooms)
        const roomList =  this.props.rooms
        return(
            <div>
               {
                   roomList.map((room, k) =>{
                       return(
                           <div key={k}>
                               <Link to={`room/${room.serverKey}`}>{room.name}</Link>
                           </div>
                       )
                   })
               }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { rooms } = state;
    return {
        rooms
    }
}

export default connect(mapStateToProps, { setRooms })(RoomList);