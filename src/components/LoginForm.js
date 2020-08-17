import React from 'react'

const LoginForm = ({ toggleAuth }) => {
	const switchAuth = (e) => {
		e.preventDefault()
		toggleAuth()
		console.log('1')
	}
	return (
		<form className="form" onSubmit={switchAuth}>
			<label className="form-label">Login</label>
			<input type="text" name="login" />
			<label className="form-label">Password</label>
			<input type="password" name="password" />
			<input type="submit" value="toggle" />
		</form>
	)
}

export default LoginForm
