import React, { PropTypes, Component } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'

import Tile from '../Tile'

class TileGroup extends Component{
	constructor(props, context) {
    super(props, context)
  }

  render(){
    const { tiles } = this.props
  	return (
  		<div className={style.TileGroup}>
        {tiles.map((tile,index)=>{
          return <Tile key={index} {...tile} />
        })}
  		</div>
  	)
  }
}
Tile.propTypes = {

}
export default TileGroup