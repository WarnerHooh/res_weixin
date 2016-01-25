import React, { Component, PropTypes } from 'react'
import style from './style.css'

//导入组件
import SearchBox from '../../components/SearchBox'
import FileItem from '../../components/FileItem'
 
class ResList extends Component {
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


export default ResList