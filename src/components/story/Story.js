import React, { useEffect, useContext } from 'react'
import Parallax from 'parallax-js'
import StoryHeader from './StoryHeader'
import { StoryContext } from '../../contexts/StoryContext'
import StoryContent from './StoryContent'

const Story = () => {
	const { story } = useContext(StoryContext)
	useEffect(() => {
		const scene = document.querySelector('#scene')
		const parallaxInstance = new Parallax(scene, {
			relativeInput: true,
		})
		parallaxInstance.friction(0.2, 0.2)
	}, [])
	return (
		<div
			className="story"
			data-depth="0.2"
			data-relative-input="true"
			id="scene"
		>
			<StoryHeader title={story.title} author={story.author} />
			<StoryContent story={story} />
		</div>
	)
}

export default Story
