import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

const Profile = () => {
	const { user } = useContext(UserContext)
	return (
		<div className="profile">
			<h3 className="profile__username">{user.username}</h3>
			<p className="profile__detail">{user.email}</p>
			<p className="profile__detail">{user.age}</p>
		</div>
	)
}

export default Profile
