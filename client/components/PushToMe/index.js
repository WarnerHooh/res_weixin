import React, { PropTypes, Component } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'

import FileItemCloud from '../FileItemCloud'

class PushToMe extends Component{

	constructor(props, context) {
		super(props, context)
	}

	render(){
		return (
			<div className={style.PushToMe}>
				<div className={style.top+' '+bStyle.f14}>
					<span className={style.name}>张星</span>推送给我的
					<span className={style.time}>16:37</span>
					<span className={style.time}>2015-11-01</span>	
				</div>
				<FileItemCloud hideTime={true} />
				<FileItemCloud hideTime={true} />
			</div>
		)
	}
}

export default PushToMe