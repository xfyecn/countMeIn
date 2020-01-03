import { SIGN_IN } from '../actions/auth';

const initialState = {
    signedInUser: null,
}

export default function(state = initialState, action){
    const { type } = action;

    switch(type){
        case SIGN_IN:
            return {
                ...state,
            }
        default:
            return state;

    }
}