import React, { Component, PropTypes } from 'react'
import style from './style.css'

class StarRateInline extends Component{

	constructor(props, context) {
    super(props, context)
  }

  render(){
  	return (
  		<div className={style.StarRateInline}>
  			<div className={style.StarRateInline_stars}></div>
  		</div>
  	)
  }
}

export default StarRateInline