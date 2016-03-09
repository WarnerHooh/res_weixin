
import React, { Component, PropTypes } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'

//导入组件
import SearchBox from '../../components/SearchBox'
import Tile from '../../components/Tile'
 
class PersonalPage extends Component {
  render() {
  	let Isrc = require('./images/banner_mySpace.png');
    let avatarSrc = require('./images/avatar.gif')
    return (
    	<div>
	    	<SearchBox />
	      <div className={style.banner} style={{backgroundImage:'url('+Isrc+')'}}></div>
        <div className={style.userInfo}>
          <div className={style.avatar}><img src={avatarSrc} /></div>
          <div className={style.userInfoCont}>
            <span className={style.userInfoItem+' '+bStyle.f16}>账号：T20150916000037</span>
            <span className={style.userInfoItem+' '+bStyle.f16}>姓名：王雨</span>
            <div className={style.unbindBtn}>解除绑定</div>
          </div>
        </div>
        <Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile />
      </div>
    )
  }
}

export default PersonalPage