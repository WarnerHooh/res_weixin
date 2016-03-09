import React, { PropTypes, Component } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'
import StarRateInline from '../StarRateInline'

class Video extends Component{
	constructor(props, context) {
    super(props, context)
  }

  render(){
  	return (
  		<div className={style.Video}>

        <video src='./test.mp4' controls="controls">您的浏览器不支持 video 标签。</video>
        <div className={style.VideoInfo}>
          <h1 className={bStyle.f18}>议论文的写作结构（一）</h1>
          <div className={style.VideoInfoButtom}>
            <span className={style.contributer+' '+bStyle.f14}>来源：成都市第四中学-王翔</span>
            <div className={style.starRate}><StarRateInline /></div>
          </div>
        </div>
      </div>
  	)
  }
}

export default Video