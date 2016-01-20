
import React, { Component, PropTypes } from 'react'
import style from './style.css'

//导入组件
import SearchBox from '../../components/SearchBox'
import Tile from '../../components/Tile'
 
class RmsIndex extends Component {
  render() {
  	var Isrc = require('./images/banner_res.png');
    return (
    	<div>
	    	<SearchBox />
	      <div className={style.banner} style={{backgroundImage:'url('+Isrc+')'}}></div>
	      <Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile />
      </div>
    )
  }
}

export default RmsIndex