export const SIGN_IN = "SIGN_IN";

//this is an action creator
export function signIn(){
    console.log("YOU HIT THE SIGNIN FUNCTION")
    return {
        type: 'SIGN_IN'
    }
}