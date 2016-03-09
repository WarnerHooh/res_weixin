
import React, { Component, PropTypes } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'

//导入组件
import SearchBox from '../../components/SearchBox'
import TeacherItem from '../../components/TeacherItem'
 
class TeacherList extends Component {
	render() {
		let Isrc = require('./images/TeacherList_banner.png')
		
		return (
			<div>
				<SearchBox />
				<div className={style.TeacherList_banner} style={{backgroundImage:'url('+Isrc+')'}}></div>
				<ul className={style.TeacherList_list}>
				  <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
				</ul>
			</div>
		)
	}
}

export default TeacherList