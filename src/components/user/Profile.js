import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

const Profile = () => {
	const { user } = useContext(UserContext)
	return (
		<div className="dashboard__profile">
			<h3 className="dashboard__profile_username">{user.username}</h3>
			<div className="dashboard__profile_detail">
				<p className="dashboard__profile_detail_label">User email:</p>
				<p className="dashboard__profile_detail_value">{user.email}</p>
			</div>
			<div className="dashboard__profile_detail">
				<p className="dashboard__profile_detail_label">User age:</p>
				<p className="dashboard__profile_detail_value">{user.age}</p>
			</div>
		</div>
	)
}

export default Profile
