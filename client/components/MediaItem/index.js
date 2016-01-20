import React, { PropTypes, Component } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'

class MediaItem extends Component{

	constructor(props, context) {
    super(props, context)
  }

  render(){

  	return (
  		<div className={style.MediaItem}>
  			<div className={style.MediaItem_thumbCntr}>
          <img />
  				<div className={style.MediaItem_thumb}></div>
          <div className={style.MediaItem_ico}></div>
          <span className={style.MediaItem_time+" "+bStyle.f14}>90:30</span>
  			</div>
  			<div className={style.MediaItem_title}>标题</div>
  		</div>
  	)
  }
}

export default MediaItem