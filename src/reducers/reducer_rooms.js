import { SET_ROOMS } from '../constants';

export default (state = [], action) => {
    switch (action.type) {
        case SET_ROOMS:
            const { rooms } = action;
            return rooms;
        default:
            return state;
    }
}