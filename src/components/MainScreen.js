import React, { useContext } from 'react'
import Freepik from './fixed/Freepik'
import { AuthContext } from '../contexts/AuthContext'
import Dashboard from './dashboard/Dashboard'
import UnauthorizedView from './login/UnauthorizedView'

const MainScreen = () => {
	const { isAuthenticated } = useContext(AuthContext)
	return (
		<>
			{isAuthenticated ? <Dashboard /> : <UnauthorizedView />}
			<Freepik />
		</>
	)
}

export default MainScreen
