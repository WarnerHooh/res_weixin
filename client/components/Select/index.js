import React, { PropTypes, Component } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'


class Select extends Component{

	constructor(props, context) {
    super(props, context)
  }

  render(){

  	return (
      <select className={style.Select+' '+bStyle.f16} style={this.props.css}>
        <option className={bStyle.f16}>教师</option>
        <option className={bStyle.f16}>学生</option>
        <option className={bStyle.f16}>家长</option>
      </select>
  	)
  }
}

export default Select