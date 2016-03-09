import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import style from './style.css'

//导入组件
import BreadNav from '../../components/BreadNav'
import PushToMe from '../../components/PushToMe'
 
class PushToMePage extends Component {
	render() {
		return (
			<div className={style.PushToMePage}>
		    <BreadNav />
        <PushToMe />
        <PushToMe />
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
)(PushToMePage)