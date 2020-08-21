import React, { useContext } from 'react'
import Story from './story/Story'
import LoginScreen from './login/LoginScreen'
import Freepik from './fixed/Freepik'
import { AuthContext } from '../contexts/AuthContext'
import StoryContextProvider from '../contexts/StoryContext'

const MainScreen = () => {
	const { isAuthenticated } = useContext(AuthContext)
	return (
		<>
			{isAuthenticated ? (
				<StoryContextProvider>
					<Story />
				</StoryContextProvider>
			) : (
				<LoginScreen />
			)}
			<Freepik />
		</>
	)
}

export default MainScreen
