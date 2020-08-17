import React, { useEffect, useState } from 'react'
import './App.scss'
import Parallax from 'parallax-js'
import LoginForm from './components/LoginForm'
import Story from './components/Story'

function App() {
	const [isAuth, setAuthStatus] = useState(true)

	useEffect(() => {
		const scene = document.querySelector('.scene')
		const parallaxInstance = new Parallax(scene, {
			relativeInput: true,
		})
		parallaxInstance.friction(0.2, 0.2)
	}, [])

	const toggleAuth = () => {
		setAuthStatus(!isAuth)
		console.log('2')
	}

	return (
		<div className="App">
			<div data-relative-input="true" id="scene" className="scene">
				{isAuth ? <Story /> : <LoginForm toggleAuth={toggleAuth} />}
			</div>
		</div>
	)
}

export default App
