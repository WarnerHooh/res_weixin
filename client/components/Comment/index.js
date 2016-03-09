import React, { PropTypes, Component } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'

import StarRateInline from '../StarRateInline'

class Comment extends Component{

	constructor(props, context) {
    super(props, context)
  }

  render(){
  	var imgsrc = require('./images/avatar.png');
  	return (
  		<div className={style.Comment}>
  			<div className={style.CommentAvatar}>
  				<img src={imgsrc}/>
  			</div>
  			<div className={style.CommentContent}>
  				<span className={style.CommentUserName}>l_ch_sheng</span>
  				<sapn className={style.CommentTime}>2015-12-01 10:31</sapn>
  				<div className={style.CommentStarRate}>
  					<StarRateInline />
  				</div>
  				<p className={style.CommentCont}>转基因技术是传统育种技术的自然延伸，是解决人类目前面临的生存问题、环境等问题重要手段。</p>
  			</div>
  		</div>
  	)
  }
}

export default Comment