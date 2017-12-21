import { SET_CHATS } from '../constants';

export default (state = [], action) => {
    switch (action.type) {
        case SET_CHATS:
            const { chats } = action;
            return chats;
        default:
            return state;
    }
}