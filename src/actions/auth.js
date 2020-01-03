export const UPDATE_AUTH = "UPDATE_AUTH";

//this is an action creator
export function updateAuth(user){

    return {
        type: 'UPDATE_AUTH',
        data: user,
    }
}