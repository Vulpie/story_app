import React from 'react'
import StoryParagraph from './StoryParagraph'

const StoryContent = ({ story }) => {
	return (
		<div className="story__content" data-depth="0.2">
			{story.content.map((paragraph, id) => (
				<StoryParagraph paragraph={paragraph} key={id} />
			))}
		</div>
	)
}

export default StoryContent
