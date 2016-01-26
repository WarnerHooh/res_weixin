import React, { Component, PropTypes } from 'react'
import style from './style.css'

import Video from '../../components/Video'
import ComponentList from '../../components/CommentList'

class VedioScan extends Component{

  render(){
  	return(
  		<div>
  			<Video />
  			<ComponentList />
  		</div>
  	)
  }
}

export default VedioScan