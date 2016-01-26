import React, { PropTypes, Component } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'


class Select extends Component{

	constructor(props, context) {
    super(props, context)
  }

  render(){

  	return (
      <div className={style.Select}>
        <select className={bStyle.f16}>
          <option className={bStyle.f16}>教师</option>
          <option className={bStyle.f16}>学生</option>
          <option className={bStyle.f16}>家长</option>
        </select>
      </div>
  	)
  }
}

export default Select