import React, { useState, useEffect, useContext } from 'react'
import { FlashContext } from '../../contexts/FlashContext'

const Flash = () => {
	const { popup } = useContext(FlashContext)
	const [visibility, setVisibility] = useState(false)
	useEffect(() => {
		console.log(popup)
		setVisibility(true)
		const timer = setTimeout(() => {
			setVisibility(false)
		}, 5000)
		return () => clearTimeout(timer)
	}, [popup])

	const closePopup = () => {
		setVisibility(false)
	}
	return (
		visibility && (
			<div className="alert">
				<div className={`alert__${popup.type}`} onClick={closePopup}>
					<p>{popup.message}</p>
				</div>
			</div>
		)
	)
}

export default Flash
