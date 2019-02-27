import ACTIONS from '../Actions'

const defaultState = {
	lists: []
}

const Reducer = (state = defaultState, action) => {
	switch (action.type) {
		case ACTIONS.Types.GET_CAMEL_LIST:
			return {
				...state,
				lists: action.lists
			}
		default:
			return state
	}
}

export default Reducer
