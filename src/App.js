import React from 'react'
import './App.scss'
import AuthContextProvider from './contexts/AuthContext'
import MainScreen from './components/MainScreen'


function App() {
	return (
		<div className="App">
			<AuthContextProvider>
				<MainScreen/>
			</AuthContextProvider>
		</div>
	)
}

export default App
