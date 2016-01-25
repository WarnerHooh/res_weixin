import React, { PropTypes, Component } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'

import Btn from '../../components/Btn'
import StarRate from '../../components/StarRate'

class CommentInput extends Component{
	constructor(props, context) {
    super(props, context)
  }

  render(){
  	return(
  		<div className={style.CommentInput}>
  			<div className={style.CommentInputTop}>
  				<span>您的评论</span>
  			</div>
  			<textarea className={style.CommentInputCont}></textarea>
  			<div className={style.CommentInputBottom}><Btn /></div>
  		</div>
  	)
  }
}

export default CommentInput