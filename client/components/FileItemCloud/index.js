import React, { PropTypes, Component } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'

import FileIco from '../FileIco'
import Checkbox from '../Checkbox'

class FileItemCloud extends Component{

	constructor(props, context) {
		super(props, context)
	}

	render(){
		let time = (
			<span className={style.time}>
				<span className={style.fileItem_info_item}>2015-11-01</span>
				<span className={style.fileItem_info_item}>16:37</span>
			</span>
		)
		if(this.props.hideTime){
			time = ''
		}
		return (
			<div className={style.fileItemCloud}>
				<div className={style.fileItem_ico}>
					<FileIco />
					<div className={style.fileStatus}></div>
				</div>
				<div className={style.fileItem_info}>
					<span className={style.fileItem_title+' '+bStyle.f16}>人教版小学数学五年级下册教学</span>
					<span className={style.fileItem_info_item}>953KB</span>
					{time}
				</div>
				<div className={style.checkbox}>
					<Checkbox />
				</div>
			</div> 
		)
	}
}

export default FileItemCloud