
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { createHistory } from 'history'
import { syncHistoryWithStore } from 'react-router-redux'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './containers/App'
import MediaList from './containers/MediaList'
import RmsIndex from './containers/RmsIndex'
import ResList from './containers/ResList'
import CommentPage from './containers/CommentPage'
import VedioScan from './containers/VedioScan'
import PushList from './containers/PushList'
import TeacherList from './containers/TeacherList'
import TopicList from './containers/TopicList'
import PersonalPage from './containers/PersonalPage'
import TopicSrcPage from './containers/TopicSrcPage'
import ImgPreview from './containers/ImgPreview'
import UpLoad from './containers/UpLoad'
import DocPreview from './containers/DocPreview'
import MyCloud from './containers/MyCloud'
import PushToMePage from './containers/PushToMePage'
import ManageClass from './containers/ManageClass'
import ClassMembers from './containers/ClassMembers'

import configure from './store'

const store = configure()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<Route path="MediaList" component={MediaList} />
				<Route path="RmsIndex" component={RmsIndex} />
				<Route path="ResList(/:name)" component={ResList} />
				<Route path="VedioScan" component={VedioScan} />
				<Route path="CommentPage" component={CommentPage} />
				<Route path="PushList" component={PushList} />
				<Route path="TeacherList" component={TeacherList} />
				<Route path="TopicList" component={TopicList} />
				<Route path="TopicSrcPage" component={TopicSrcPage} />
				<Route path="PersonalPage" component={PersonalPage} />
				<Route path="ImgPreview" component={ImgPreview} />
				<Route path="UpLoad" component={UpLoad} />
				<Route path="DocPreview" component={DocPreview} />
				<Route path="MyCloud" component={MyCloud} />
				<Route path="PushToMePage" component={PushToMePage} />
				<Route path="ManageClass" component={ManageClass} />
				<Route path="ClassMembers" component={ClassMembers} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
)
