import React, { PropTypes, Component } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'

class ClassItem extends Component{

	constructor(props, context) {
		super(props, context)
	}

	render(){
		return (
			<div className={style.ClassItem}>
				<div className={style.class}>
					<div className={style.ico}>
						<div></div>
					</div>
					<span className={style.classname+' '+bStyle.f14}>二年级1班</span>
				</div>
				<div className={style.classinfo}>
					<span>教师1人</span>
					<span>|</span>
					<span>学生42人</span>
					<span>|</span>
					<span>家长20人</span>
				</div>
			</div>
		)
	}
}

export default ClassItem