import React, { PropTypes, Component } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'

class Btn extends Component{
	constructor(props, context) {
    super(props, context)
  }

  render(){
  	return(
  		<button className={style.Btn+' '+bStyle.f18} style={this.props.css}>{this.props.title}</button>
  	)
  }
}

export default Btn