import React, { Component, PropTypes } from 'react'
import style from './style.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory, Router, Route, Link } from 'react-router'
import * as TodoActions from '../../actions/todos'
import { routerActions } from 'react-router-redux'

//导入组件
import SearchBox from '../../components/SearchBox'
import TileGroup from '../../components/TileGroup'
 
class RmsIndex extends Component {

	componentDidMount(){
		const { actions, children, history } = this.props
		
	}

	render() {
		const { tiles, actions, children, history, dispatch } = this.props
		console.log(tiles)
		// console.log(this.props)

		let Isrc = require('./images/banner_res.png')
		return (
			<div>
				<SearchBox placeholder='资源名称' />
				<div onClick={()=>actions.sendXHR('M00003','',actions.addTiles,'RmsIndex')} className={style.banner} style={{backgroundImage:'url('+Isrc+')'}}></div>
				<TileGroup tiles={tiles} />
			</div>
		)
	}
}

function mapStateToProps(state) {

	return {
		tiles: state.appData.RmsIndex.tiles,
		actions:state.actions
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(TodoActions, dispatch),
		dispatch
	}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RmsIndex)
