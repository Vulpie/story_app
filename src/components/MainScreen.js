import React, { useContext } from 'react'
import Freepik from './fixed/Freepik'
import { AuthContext } from '../contexts/AuthContext'
import Dashboard from './dashboard/Dashboard'
import UnauthorizedView from './login/UnauthorizedView'
import Flash from './fixed/Flash'

const MainScreen = () => {
	const { isAuthenticated } = useContext(AuthContext)
	return (
		<>
			{isAuthenticated ? <Dashboard /> : <UnauthorizedView />}
			<Freepik />
			<Flash />
		</>
	)
}

export default MainScreen
