import { combineReducers } from 'redux';
import user from './reducer_user';
import rooms from './reducer_rooms';
import chats from './reducer_chats';

export default combineReducers({
    user,
    rooms,
    chats
})