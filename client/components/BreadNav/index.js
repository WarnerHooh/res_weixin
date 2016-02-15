import React, { PropTypes, Component } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'


class BreadNav extends Component{
	constructor(props, context) {
		super(props, context)
  }

  render(){
  	return(
  		<ul className={style.BreadNav}>
  			<li className={bStyle.f14}>我的云盘</li>
  			<li className={bStyle.f14}>文件夹</li>
  		</ul>
  	)
 	}
}
export default BreadNav