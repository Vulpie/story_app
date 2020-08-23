export const FlashReducer = (state, action) => {
	switch (action.type) {
		case 'ERROR_MESSAGE':
			return [
				{
					message: action.message,
				},
			]
		case 'SUCCESS_MESSAGE':
			return [
				{
					message: action.message,
				},
			]
		default:
			return state
	}
}
