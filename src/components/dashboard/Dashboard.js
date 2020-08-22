import React, { useState, useEffect } from 'react'
import Profile from '../user/Profile'
import Story from '../story/Story'
import StoryList from '../story/StoryList'
import UserContextProvider from '../../contexts/UserContext'
import StoryContextProvider from '../../contexts/StoryContext'
import CreateStory from '../story/CreateStory'

const PAGES = {
	USER_PROFILE: 'user_profile',
	STORY_LIST: 'story_list',
	CREATE_STORY: 'create_story',
	READ_STORY: 'read_story',
}

const Dashboard = () => {
	const [page, setPage] = useState(PAGES.USER_PROFILE)
	const [view, setView] = useState()

	useEffect(() => {
		switch (page) {
			case PAGES.USER_PROFILE:
				setView(
					<UserContextProvider>
						<Profile test={'profile'} />
					</UserContextProvider>
				)
				break
			case PAGES.STORY_LIST:
				setView(<StoryList />)
				break
			case PAGES.CREATE_STORY:
				setView(<CreateStory />)
				break
			case PAGES.READ_STORY:
				setView(
					<StoryContextProvider>
						<Story />
					</StoryContextProvider>
				)
				break
			default:
				setView(
					<UserContextProvider>
						<Profile test={'profile'} />
					</UserContextProvider>
				)
		}
	}, [page])
	return (
		<div className="dashboard">
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
