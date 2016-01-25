import React, { PropTypes, Component } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'

import Comment from '../Comment'

class CommentList extends Component{

	constructor(props, context) {
    super(props, context)
  }

  render(){
  	return (
  		<div className={style.CommentList}>
	  		<t2 className={style.CommentListTitle+' '+bStyle.f16}>评论列表<span className={style.CommentListCount}>(94)</span></t2>
	  		<ul className={style.CommentListList}>
	  			<li><Comment /></li>
	  			<li><Comment /></li>
	  			<li><Comment /></li>
	  			<li><Comment /></li>
	  			<li><Comment /></li>
	  		</ul>
  		</div>
  	)
  }
}

export default CommentList