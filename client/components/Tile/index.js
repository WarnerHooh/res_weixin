import React, { PropTypes, Component } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'

class Tile extends Component{
	constructor(props, context) {
    super(props, context)
  }

  render(){

  	return (
  		<div className={style.tile}>
  			<div className={style.tile_ico} />
  			<div className={style.tile_title} />
  		</div>
  	)
  }
}

export default Tile