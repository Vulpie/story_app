import React from 'react'

const CreateStore = () => {
	const readInput = (e) => {
		e.preventDefault()
		console.log(e.target['title'].value)
	}
	return (
		<div className="dashboard__create">
			<h3 className="dashboard__create_page-title">Create new story</h3>
			<form className="dashboard__create_form" onSubmit={readInput}>
				<label className="dashboard__create_form_label">Title</label>
				<input
					className="dashboard__create_form_input"
					type="text"
					name="title"
					placeholder="Story Title"
				/>

				<label className="dashboard__create_form_label">
					Description
				</label>
				<textarea
					className="dashboard__create_form_input"
					type="text"
					name="description"
					placeholder="Story Description"
				></textarea>

				<label className="dashboard__create_form_label">
					Story File (.txt)
				</label>
				<input className="dashboard__create_form_input" type="file" />

				<input
					className="dashboard__create_form_btn"
					type="submit"
					value="Create Story"
				/>
			</form>
		</div>
	)
}

export default CreateStore
