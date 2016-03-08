
import React, { Component, PropTypes } from 'react'
import style from './style.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory, Router, Route, Link } from 'react-router'
import * as TodoActions from '../../actions/todos'
import { routeActions } from 'redux-simple-router'

//导入组件
import SearchBox from '../../components/SearchBox'
import Tile from '../../components/Tile'
 
class RmsIndex extends Component {
	render() {
		const { todos, actions, children } = this.props
		var Isrc = require('./images/banner_res.png');
		return (
			<div>
				<SearchBox placeholder='资源名称' />
				<div onClick={()=>{actions.testMidWare()}}	className={style.banner} style={{backgroundImage:'url('+Isrc+')'}}></div>
				<Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		todos: state.todos
	}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RmsIndex)
