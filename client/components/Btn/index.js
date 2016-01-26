import React, { PropTypes, Component } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'

class Btn extends Component{
	constructor(props, context) {
    super(props, context)
  }

  render(){
  	return(
  		<button className={style.Btn+' '+bStyle.f16} style={this.props.css}>发布评论</button>
  	)
  }
}

export default Btn