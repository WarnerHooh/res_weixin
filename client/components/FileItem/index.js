import React, { PropTypes, Component } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'

import FileIco from '../FileIco'

class FileItem extends Component{

	constructor(props, context) {
    super(props, context)
  }

	render(){
		return (
			<div className={style.fileItem}>
				<div className={style.fileItem_ico}>
					<FileIco />
				</div>
				<div className={style.fileItem_info}>
					<span className={style.fileItem_title}></span>
					<span className={style.fileItem_title}></span>
				</div>
			</div> 
		)
	}
}

export default FileItem