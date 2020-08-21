import React, { useEffect, useContext } from 'react'
import Parallax from 'parallax-js'
import StoryHeader from './Header'
import StoryParagraph from './StoryParagraph'
import { StoryContext } from '../../contexts/StoryContext'

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
			<StoryHeader />
			{story.content.map((paragraph, id) => (
				<StoryParagraph paragraph={paragraph} key={id} />
			))}
		</div>
	)
}

export default Story
