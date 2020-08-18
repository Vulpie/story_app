import React, {useContext} from 'react'
import { AuthContext } from '../../contexts/AuthContext'

const LoginForm = () => {
	const {dispatch: authDispatch } = useContext(AuthContext)
	const switchAuth = (e) => {
		e.preventDefault()
		console.log('1')
		authDispatch({type: 'AUTHENTICATE_USER'})
	}
	return (
		<form className="login-screen__form" onSubmit={switchAuth}>
			<label className="login-screen__form_label">Login</label>
			<input type="text" name="login" className="login-screen__form_input" />
			<label className="login-screen__form_label">Password</label>
			<input type="password" name="password" className="login-screen__form_input" />
			<input type="submit" value="toggle" className="login-screen__form_button"/>
		</form>
	)
}

export default LoginForm
