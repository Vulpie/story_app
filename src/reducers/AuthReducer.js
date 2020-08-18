export const AuthReducer = (state, action) => {
    switch(action.type){
        case 'AUTHENTICATE_USER':
            return !state
        default: 
            return state
    }

}