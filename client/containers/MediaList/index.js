
import React, { Component, PropTypes } from 'react'
import style from './style.css'
//导入组件
import MediaItem from '../../components/MediaItem'
import SearchBox from '../../components/SearchBox'
import Tile from '../../components/Tile'
 
class MediaList extends Component {
  render() {
    return (
    	<div>
	    	<SearchBox />
	    	<div className={style.MediaItem_cntr}>
	    		<MediaItem /><MediaItem />
	    	</div>
      </div>
    )
  }
}


export default MediaList

