import React, { Component, PropTypes } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'

class TopicSrcPage extends Component {
  render() {
    return (
    	<div>
	    	<SearchBox />
        <div style={{marginTop:'1.2rem'}}>
          <FileItem />
          <FileItem />
          <FileItem />
          <FileItem />
          <FileItem />
          <FileItem />
          <FileItem />
          <FileItem />
          <FileItem />
        </div>
          
      </div>
    )
  }
}

export default TopicSrcPage