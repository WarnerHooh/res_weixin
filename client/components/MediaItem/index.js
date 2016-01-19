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
  				<div className={style.MediaItem_thumb}></div>
  			</div>
  			<div className={style.MediaItem_title+' '+bStyle.f16}>标题</div>
  		</div>
  	)
  }
}

export default MediaItem