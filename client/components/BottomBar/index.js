import React, { PropTypes, Component } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'

class BottomBar extends Component{
	constructor(props, context) {
		super(props, context)
	}

	render(){
		return(
			<div className={style.BottomBar}>
				<div className={style.bookmarks+' '+bStyle.f16}>收藏</div>
				<div className={style.push+' '+bStyle.f16}>推送</div>
				<div className={style.zan+' '+bStyle.f16}>赞(3)</div>
				<div className={style.comment+' '+bStyle.f16}>评论(12)</div>
			</div>
		)
	}
}

export default BottomBar