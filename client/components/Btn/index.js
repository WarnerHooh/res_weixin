import React, { PropTypes, Component } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'

export default class Btn extends Component{
	constructor(props, context) {
    super(props, context)
  }

  render(){
  	return(
  		<button className={style.Btn+' '+bStyle.f16}>发布评论</button>
  	)
  }
}