import React, { useState, useEffect } from 'react'
import Profile from '../user/Profile'
import Story from '../story/Story'
import StoryList from '../story/StoryList'
import UserContextProvider from '../../contexts/UserContext'
import StoryContextProvider from '../../contexts/StoryContext'
import CreateStory from '../story/CreateStory'

import bgc1 from '../../assets/backgrounds/bgc1.jpg'
import bgc2 from '../../assets/backgrounds/bgc2.jpg'
import bgc3 from '../../assets/backgrounds/bgc3.jpg'
import bgc4 from '../../assets/backgrounds/bgc4.jpg'

const PAGES = {
	USER_PROFILE: 'user_profile',
	STORY_LIST: 'story_list',
	CREATE_STORY: 'create_story',
	READ_STORY: 'read_story',
}

const SOURCES = {
	VALLEY: 'valley',
	MOUNTAIN_LAKE: 'mountain_lake',
	MOUNTAINS: 'mountains',
	LAKE: 'lake',
}

const Dashboard = () => {
	const [page, setPage] = useState(PAGES.USER_PROFILE)
	const [view, setView] = useState()
	const [background, setBackground] = useState()
	const [backgroundSRC, setBackgroundSRC] = useState()

	useEffect(() => {
		switch (background) {
			case SOURCES.VALLEY:
				setBackgroundSRC(bgc1)
				break
			case SOURCES.MOUNTAIN_LAKE:
				setBackgroundSRC(bgc2)
				break
			case SOURCES.MOUNTAINS:
				setBackgroundSRC(bgc3)
				break
			case SOURCES.LAKE:
				setBackgroundSRC(bgc4)
				break
			default:
				setBackgroundSRC(bgc1)
		}
	}, [background])

	useEffect(() => {
		switch (page) {
			case PAGES.USER_PROFILE:
				setView(
					<UserContextProvider>
						<Profile test={'profile'} />
					</UserContextProvider>
				)
				setBackground('valley')
				break
			case PAGES.STORY_LIST:
				setView(<StoryList />)
				setBackground('mountain_lake')
				break
			case PAGES.CREATE_STORY:
				setView(<CreateStory />)
				setBackground('mountains')
				break
			case PAGES.READ_STORY:
				setView(
					<StoryContextProvider>
						<Story />
					</StoryContextProvider>
				)
				setBackground('lake')
				break
			default:
				setView(
					<UserContextProvider>
						<Profile test={'profile'} />
					</UserContextProvider>
				)
				setBackground('valley')
		}
	}, [page])

	const bgcStyle = { backgroundImage: `url(${backgroundSRC})` }
	return (
		<div className="dashboard" style={bgcStyle}>
			<div className="dashboard__navbar">
				<div
					className="dashboard__navbar_item"
					onClick={() => setPage(PAGES.USER_PROFILE)}
				>
					Profile
				</div>
				<div
					className="dashboard__navbar_item"
					onClick={() => setPage(PAGES.STORY_LIST)}
				>
					Story List
				</div>
				<div
					className="dashboard__navbar_item"
					onClick={() => setPage(PAGES.READ_STORY)}
				>
					Read Story
				</div>
				<div
					className="dashboard__navbar_item"
					onClick={() => setPage(PAGES.CREATE_STORY)}
				>
					Create Story
				</div>
			</div>
			<div>{view}</div>
		</div>
	)
}

export default Dashboard
