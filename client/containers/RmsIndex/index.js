
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
  constructor(props, context) {
    super(props, context)
  }

  render() {
  	var Isrc = require('./images/banner_res.png');
    const val = 'aaa'
    return (
    	<div>
	    	<SearchBox />
	      <div  onClick={()=>this.props.history.push('ResList',{id:'aa'})}  className={style.banner} style={{backgroundImage:'url('+Isrc+')'}}></div>
	      <Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile />
        <Link to={"ResList"} params={{id: 1}}>{val}</Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}


export default connect(
  mapStateToProps
)(RmsIndex)
