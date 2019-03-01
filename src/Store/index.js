import { createStore, applyMiddleware } from 'redux'

// Logger with default options
import logger from 'redux-logger'

import Reducer from './Reducers'

export default function configureStore(initialState) {
	const store = createStore(Reducer, initialState, applyMiddleware(logger))
	return store
}
