
import React, { Component, PropTypes } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'

//导入组件
import SearchBox from '../../components/SearchBox'
import Tile from '../../components/Tile'
 
class TopicList extends Component {
  render() {
    let Isrc = require('./images/topic_banner.png')
    let coverImg = require('./images/topic_banner.png')
    return (
      <div>
        <SearchBox />
        <div className={style.TopicList_banner} style={{backgroundImage:'url('+Isrc+')'}}></div>
        <ul className={style.TopicList_list}>
          <li>
            <div className={style.TopicList_cover}><img src={coverImg}/></div>
            <div className={style.TopicList_info}>
              <h2 className={style.TopicList_title+' '+bStyle.f18}>2015机器人大赛</h2>
              <p className={style.TopicList_infoCont}>专题简介专题简介专题简介专题简介专题简介专题简介专题简介专题简介专题简介专题简介专题简介专题简介...  [2015-12-03]</p>
            </div>
          </li>

          <li>
            <div className={style.TopicList_cover}><img src={coverImg}/></div>
            <div className={style.TopicList_info}>
              <h2 className={style.TopicList_title+' '+bStyle.f18}>2015机器人大赛</h2>
              <p className={style.TopicList_infoCont}>专题简介专题简介专题简介专题简介专题简介专题简介专题简介专题简介专题简介专题简介专题简介专题简介...  [2015-12-03]</p>
            </div>
          </li>

          <li>
            <div className={style.TopicList_cover}><img src={coverImg}/></div>
            <div className={style.TopicList_info}>
              <h2 className={style.TopicList_title+' '+bStyle.f18}>2015机器人大赛</h2>
              <p className={style.TopicList_infoCont}>专题简介专题简介专题简介专题简介专题简介专题简介专题简介专题简介专题简介专题简介专题简介专题简介...  [2015-12-03]</p>
            </div>
          </li>

    
        </ul>
      </div>
    )
  }
}

export default TopicList