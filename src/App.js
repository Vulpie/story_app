import React, {  useState } from 'react'
import './App.scss'
import Story from './components/Story'
import LoginScreen from './components/login/LoginScreen'
import Freepik from './components/fixed/Freepik'

function App() {
	const [isAuth, setAuthStatus] = useState(false)

	return (
		<div className="App">
				{isAuth ? <Story /> : <LoginScreen/>}
				<Freepik/>
		</div>
	)
}

export default App
