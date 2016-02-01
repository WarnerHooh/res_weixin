import React, { PropTypes, Component } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'


class ImgView extends Component{

	constructor(props, context) {
    super(props, context)
  }

	render(){
		let src1 = require('./images/01.jpg');
		let src2 = require('./images/02.png');
		let src3 = require('./images/03.jpg');
		return (
			<div className={style.ImgView}>
				<ul>
					<li className={style.ImgView_list}><img src={src1} /></li>
					<li className={style.ImgView_list}><img src={src2} /></li>
					<li className={style.ImgView_list}><img src={src3} /></li>
				</ul>
				<div className={style.ImgView_btnPrev}></div>
				<div className={style.ImgView_btnNext}></div>
			</div>
		)
	}
}

export default ImgView