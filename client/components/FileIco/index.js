import React, { PropTypes, Component } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'

class FileIco extends Component{

	constructor(props, context) {
    super(props, context)
  }

	render(){
		return (
			<div className={style.FileIco}>
				<div className={style.Fileico_ico}></div>
				<div className={style.FileIco_status}></div>
			</div> 
		)
	}
}

export default FileIco