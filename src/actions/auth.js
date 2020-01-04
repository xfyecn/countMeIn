import * as firebase from 'firebase'

export const UPDATE_AUTH = "UPDATE_AUTH";


export function updateAuth(){
    return async function(dispatch){

        await firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                return dispatch({
                    type: UPDATE_AUTH,
                    data: user,
                })
            } else {
                // No user is signed in.
                console.log("NO USER")
            }
        })
    }
}