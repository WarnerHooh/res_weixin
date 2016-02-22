import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import style from './style.css'
import bStyle from '../../bundle/base.css'

//导入组件
import SearchBox from '../../components/SearchBox'
import Progress from '../../components/Progress'
 
class ClassMembers extends Component {
	render() {
		let avatar = require('./images/avatar.gif')
		return (
			<div className={style.ClassMembers+' '+bStyle.f14}>
				<SearchBox />
				<dl>
					<dt>教师</dt>
						<dd><img src={avatar} />李芳</dd>
					<dt>学生</dt>
						<dd><img src={avatar} />李明</dd>
						<dd><img src={avatar} />李明</dd>
					<dt>家长</dt>
						<dd><img src={avatar} />李伟渡<span className={style.child}>(李思)</span></dd>
						<dd><img src={avatar} />魏先志<span className={style.child}>(魏明明)</span></dd>
				</dl>
				<Progress progress='45' />
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
)(ClassMembers)