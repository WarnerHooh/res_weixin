import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import style from './style.css'

//导入组件
import BreadNav from '../../components/BreadNav'
import FileItemCloud from '../../components/FileItemCloud'
import BottomBar from '../../components/BottomBar'

class MyCloud extends Component {
	render() {

		return (
			<div>
				<div className={style.topbar}>
					<BreadNav />
				</div>
				<div className={style.fileList}>
          <FileItemCloud />
          <FileItemCloud />
          <FileItemCloud />
        </div>
        <BottomBar />
			</div>
		)
	}
}
function mapStateToProps(state) {
	return {
		todos: state.todos,
		params: state.params
	}
}

export default connect(
	mapStateToProps
)(MyCloud)