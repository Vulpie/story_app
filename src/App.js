import React from 'react'
import './App.scss'
import AuthContextProvider from './contexts/AuthContext'
import MainScreen from './components/MainScreen'
import FlashContextProvider from './contexts/FlashContext'

function App() {
	return (
		<div className="App">
			<AuthContextProvider>
				<FlashContextProvider>
					<MainScreen />
				</FlashContextProvider>
			</AuthContextProvider>
		</div>
	)
}

export default App
