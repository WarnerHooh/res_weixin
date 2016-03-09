
import { createStore,applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router'
import { routerMiddleware, syncHistoryWithStore  } from 'react-router-redux'

export default function configure(initialState) {
	const create = window.devToolsExtension
		? window.devToolsExtension()(createStore)
		: createStore
	// console.log(createHistory())
	// const reduxRouterMiddleware = syncHistory(browserHistory)
	// const reduxRouterMiddleware = routerMiddleware(browserHistory)
	const createStoreWithMiddleware = applyMiddleware(thunk)(create);
	const store = createStoreWithMiddleware(rootReducer, initialState)
	console.log(store.getState())
	// const store = create(rootReducer, initialState)
	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers')
			store.replaceReducer(nextReducer)
		})
	}

	return store
}
