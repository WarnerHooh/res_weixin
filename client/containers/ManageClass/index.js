import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import style from './style.css'
import bstyle from '../../bundle/base.css'

//导入组件
import BreadNav from '../../components/BreadNav'
import ClassItem from '../../components/ClassItem'
 
class ManageClass extends Component {
	render() {
		return (
			<div className={style.ManageClass}>
				<BreadNav />
				<div className={style.title+' '+bstyle.f14}>我的班级</div>
				<ClassItem />
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
)(ManageClass)