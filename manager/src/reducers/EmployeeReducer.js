import {
    EMPLOYEES_FETCH_SUCCESS
} from '../types';

const INITIAL_STATE = {};
// initial object karena akan di kembalikan berupa object
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEES_FETCH_SUCCESS:
            return action.payload;

        default:
            return state;
    }
};
