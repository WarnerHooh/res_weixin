import React, { PropTypes, Component } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'

class TeacherItem extends Component{
	constructor(props, context) {
		super(props, context)
	}

	render(){

		let avatarSrc = require('./images/avatar.gif')
		return (
			<li className={style.TeacherList}>
				<div className={style.TeacherList_avatar}><img src={avatarSrc} /></div>
				<div className={style.TeacherList_infoCntr}>
					<h2 className={style.TeacherList_name+' '+bStyle.f18}>宁静(语文)</h2>
					<span className={style.TeacherList_school+' '+bStyle.f14}>成都七中</span>

					<div className={style.TeacherList_evaluation}>
						<div className={style.TeacherList_evaluationItem+' '+bStyle.f14}>
							<span>贡献数:</span><span className={style.TeacherList_number+' '+bStyle.f24}>500</span>
						</div>
						<div className={style.TeacherList_evaluationItem+' '+bStyle.f14}>
							<span>质量:</span><span className={style.TeacherList_number+' '+bStyle.f24}>4.7</span>
						</div>
					</div>

					<div className={style.TeacherList_followBtn}>+关注</div>
				</div>
			</li>
		)
	}
}

export default TeacherItem