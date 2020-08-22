import React, { useContext } from 'react'
import LoginScreen from './login/LoginScreen'
import Freepik from './fixed/Freepik'
import { AuthContext } from '../contexts/AuthContext'
import Dashboard from './dashboard/Dashboard'

const MainScreen = () => {
	const { isAuthenticated } = useContext(AuthContext)
	return (
		<>
			{isAuthenticated ? <Dashboard /> : <LoginScreen />}
			<Freepik />
		</>
	)
}

export default MainScreen
