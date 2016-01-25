import React, { PropTypes, Component } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'

import FileIco from '../FileIco'
import StarRateInline from '../StarRateInline'

class FileItem extends Component{

	constructor(props, context) {
    super(props, context)
  }

	render(){
		return (
			<div className={style.fileItem}>
				<div className={style.fileItem_ico}>
					<FileIco />
					<div className={style.starRate}><StarRateInline /></div>
				</div>
				<div className={style.fileItem_info}>
					<span className={style.fileItem_title+' '+bStyle.f18}>人教版小学数学五年级下册教学</span>
					<span className={style.fileItem_info_item+' '+style.fileItem_info_item_1}>成都市第四中学-李达</span>
					<span className={style.fileItem_info_item+' '+style.fileItem_info_item_2}>953KB</span>
				</div>
			</div> 
		)
	}
}

export default FileItem