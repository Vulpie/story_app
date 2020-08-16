import React, { useEffect } from 'react'
import './App.css'
import Parallax from 'parallax-js'
import Header from './components/Header'

function App() {
	useEffect(() => {
		const scene = document.querySelector('.scene')
		const parallaxInstance = new Parallax(scene, {
			relativeInput: true,
		})
		parallaxInstance.friction(0.2, 0.2)
	}, [])
	return (
		<div className="App">
			<div data-relative-input="true" id="scene" className="scene">
				<Header />
				<div data-depth="0.2">My first Layer!</div>
				<div data-depth="0.6">My second Layer!</div>
			</div>
		</div>
	)
}

export default App
