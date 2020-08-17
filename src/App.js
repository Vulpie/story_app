import React, {  useState } from 'react'
import './App.scss'
import LoginForm from './components/LoginForm'
import Story from './components/Story'

function App() {
	const [isAuth, setAuthStatus] = useState(false)

	const toggleAuth = () => {
		setAuthStatus(!isAuth)
	}

	return (
		<div className="App">
			<div>
				{isAuth ? <Story /> : <LoginForm toggleAuth={toggleAuth} />}
			</div>
		</div>
	)
}

export default App
