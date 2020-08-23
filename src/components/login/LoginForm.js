import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { FlashContext } from '../../contexts/FlashContext'

const LoginForm = () => {
	const { dispatch: authDispatch } = useContext(AuthContext)
	const { dispatch: flashDispatch } = useContext(FlashContext)
	const switchAuth = (e) => {
		e.preventDefault()
		const user_login = e.target['login'].value
		const user_password = e.target['password'].value

		if (!user_login || !user_password) {
			flashDispatch({
				type: 'ERROR_MESSAGE',
				message: 'Incorrect login data',
			})
			console.log('Login error')
		} else {
			authDispatch({ type: 'AUTHENTICATE_USER' })
			console.log('Login success')
		}
	}
	return (
		<form className="unauthorized__login-screen_form" onSubmit={switchAuth}>
			<label className="unauthorized__login-screen_form_label">
				Login
			</label>

			<input
				type="text"
				name="login"
				className="unauthorized__login-screen_form_input"
			/>
			<label className="unauthorized__login-screen_form_label">
				Password
			</label>

			<input
				type="password"
				name="password"
				className="unauthorized__login-screen_form_input"
			/>
			<input
				type="submit"
				value="toggle"
				className="unauthorized__login-screen_form_button"
			/>
		</form>
	)
}

export default LoginForm
