import React, { useState, createContext } from 'react';

export const AuthContext = createContext()

const AuthContextProvider = (props) =>{
    const [isAuthenticated, dispatch] = useState(false)

    return (
        <AuthContext.Provider value={{isAuthenticated, dispatch}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider