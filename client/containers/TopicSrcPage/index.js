import React, { Component, PropTypes } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'
import MediaItem from '../../components/MediaItem'
import FileItem from '../../components/FileItem'

class TopicSrcPage extends Component {
  render() {
    return (
    	<div>
        <div className={style.TopicSrcPage_top}>
          <h1 className={style.TopicSrcPage_title+' '+bStyle.f24}>2015机器人大赛</h1>
          <p>专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍专题介绍</p>
          <div className={style.TopicSrcPage_btnCntr}>
            <div className={style.TopicSrcPage_Btn2+' '+bStyle.f14}>推送专题</div>
            <div className={style.TopicSrcPage_Btn1+' '+bStyle.f14}>收藏专题</div>
          </div>
          
        </div>
        <div className={style.TopicSrcPage_vedioList}>
          <MediaItem /><MediaItem />
        </div>
        <div className={style.TopicSrcPage_imgList}>
          <MediaItem /><MediaItem />
        </div>
        <div className={style.TopicSrcPage_fileList}>
          <FileItem /><FileItem /><FileItem /><FileItem /><FileItem /><FileItem />
        </div>
      </div>
    )
  }
}

export default TopicSrcPage