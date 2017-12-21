import { SIGNED_IN, SET_ROOMS, SET_CHATS } from '../constants';


export function logUser(email) {
    const action = {
        type: SIGNED_IN,
        email
    }
    return action;
}

export function setRooms(rooms) {
    const action = {
        type: SET_ROOMS,
        rooms
    }
    return action;
}

export function setChat(chats) {
    const action = {
        type: SET_CHATS,
        chats
    }
    return action;
}