import React, { useState, createContext } from 'react'

export const UserContext = createContext()

const UserContextProvider = (props) => {
	const [user, dispatch] = useState({
		username: 'Vulpie',
		email: 'vulpie_96@kiss.com',
		age: 66,
	})
	return (
		<UserContext.Provider value={{ user, dispatch }}>
			{props.children}
		</UserContext.Provider>
	)
}

export default UserContextProvider
