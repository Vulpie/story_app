import React from 'react'

const StoryHeader = ({ title, author }) => {
	return (
		<div className="story__header" data-depth="0.2">
			<h1 className="story__header_title">{title}</h1>
			<p className="story__header_paragraph">{author}</p>
		</div>
	)
}

export default StoryHeader
