import React, { useState, createContext } from 'react'

export const FlashContext = createContext()

const FlashContextProvider = (props) => {
	const [popup, dispatch] = useState({
		message: '',
	})
	return (
		<FlashContext.Provider value={{ popup, dispatch }}>
			{props.children}
		</FlashContext.Provider>
	)
}

export default FlashContextProvider
