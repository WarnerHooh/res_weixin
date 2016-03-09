import React, { PropTypes, Component } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'
import TILE_CFG from '../../constants/tiles'

class Tile extends Component{
	constructor(props, context) {
    super(props, context)
  }

  render(){

  	return (
  		<div className={style.tile} onClick={this.props.handleClick} tileStyle={this.props.catgId}>
  			<div className={style.tile_ico} />
  			<div className={style.tile_title+' '+bStyle.f16}>{this.props.menuName}</div>
  		</div>
  	)
  }
}
Tile.propTypes = {
  handleClick: PropTypes.func,
  type: PropTypes.string
}
export default Tile