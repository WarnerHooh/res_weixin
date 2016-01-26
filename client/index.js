
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { createHistory } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './containers/App'
import MediaList from './containers/MediaList'
import RmsIndex from './containers/RmsIndex'
import ResList from './containers/ResList'
import CommentPage from './containers/CommentPage'
import VedioScan from './containers/VedioScan'
import PushList from './containers/PushList'

import configure from './store'

const store = configure()
const history = createHistory()

syncReduxAndRouter(history, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      	<Route path="MediaList" component={MediaList} />
      	<Route path="RmsIndex" component={RmsIndex} />
      	<Route path="ResList" component={ResList} />
        <Route path="VedioScan" component={VedioScan} />
        <Route path="CommentPage" component={CommentPage} />
        <Route path="PushList" component={PushList} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
