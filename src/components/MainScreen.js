import React, {useContext} from 'react';
import Story from './Story'
import LoginScreen from './login/LoginScreen'
import Freepik from './fixed/Freepik'
import { AuthContext } from '../contexts/AuthContext'

const MainScreen = () => {
    const {isAuthenticated} = useContext(AuthContext)
    return (
        <>
			{isAuthenticated ? <Story /> : <LoginScreen/>}		
				<Freepik/>
    </> );
}

export default MainScreen;