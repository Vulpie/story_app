import React, { useState, useEffect } from 'react'

import LoginScreen from './LoginForm'
import RegisterForm from './RegisterForm'

const PAGES = {
	LOGIN: 'login',
	REGISTER: 'register',
}

const UnauthorizedView = () => {
	const [page, setPage] = useState(PAGES.LOGIN)
	const [view, setView] = useState()

	useEffect(() => {
		switch (page) {
			case PAGES.LOGIN:
				setView(<LoginScreen />)
				break
			case PAGES.REGISTER:
				setView(<RegisterForm />)
				break
			default:
		}
	}, [page])

	return (
		<div className="unauthorized">
			<div className="unauthorized__navbar">
				<div
					className="unauthorized__navbar_item"
					onClick={() => setPage(PAGES.LOGIN)}
				>
					Login
				</div>
				<div
					className="unauthorized__navbar_item"
					onClick={() => setPage(PAGES.REGISTER)}
				>
					Register
				</div>
			</div>
			{view}
		</div>
	)
}

export default UnauthorizedView
