import { UPDATE_AUTH } from '../actions/auth';

const initialState = {
    signedInUser: null,
}

export default function(state = initialState, action){
    const { type, data } = action;

    switch(type){
        case UPDATE_AUTH:
            return {
                ...state,
            }
        default:
            return state;

    }
}