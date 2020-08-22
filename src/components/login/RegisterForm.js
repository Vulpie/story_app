import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

const RegisterForm = () => {
	const { dispatch: authDispatch } = useContext(AuthContext)
	const switchAuth = (e) => {
		e.preventDefault()
		console.log('1')
		authDispatch({ type: 'AUTHENTICATE_USER' })
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
				email
			</label>

			<input
				type="text"
				name="email"
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
			<label className="unauthorized__login-screen_form_label">
				Repeat Password
			</label>

			<input
				type="password"
				name="re-password"
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

export default RegisterForm
