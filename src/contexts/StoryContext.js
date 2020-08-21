import React, { useState, createContext, useEffect } from 'react'
import { storyList } from '../story.json'

export const StoryContext = createContext()

const StoryContextProvider = (props) => {
	useEffect(() => {
		console.log(storyList[0])
	}, [])
	const [story, dispatch] = useState(storyList[0])

	return (
		<StoryContext.Provider value={{ story, dispatch }}>
			{props.children}
		</StoryContext.Provider>
	)
}

export default StoryContextProvider
