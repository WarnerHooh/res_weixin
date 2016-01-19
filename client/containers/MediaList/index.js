
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as TodoActions from '../../actions/todos'
import style from './style.css'
//导入页面
import SearchBox from '../../components/SearchBox'
 
class MediaList extends Component {
  render() {
  	var Isrc = require('./images/banner_res.png');
    return (
    	<div>
	    	<SearchBox />
	      <div className={style.banner} style={{backgroundImage:'url('+Isrc+')'}}></div>
      </div>
    )
  }
}
// function mapStateToProps(state) {
//   return {
//     todos: state.todos
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(TodoActions, dispatch)
//   }
// }

export default MediaList

