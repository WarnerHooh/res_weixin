import React, { PropTypes, Component } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'


class GoTop extends Component{

	constructor(props, context) {
    super(props, context)
  }

  showMenu(e){
  	let tempDisplay;
  	let menuBox = this.refs.GoTop_menu;

  	if(menuBox.style.display!='none'){
  		menuBox.style.display='none';
  	}else{
  		menuBox.style.display='block';
  	}
  }

	render(){
		return (
			<div className={style.GoTop}>
				<div className={style.GoTop_Btn} onClick={(e)=>this.showMenu(e)}>
					<ul ref='GoTop_menu' className={style.GoTop_menu+' '+bStyle.f16} style={{display:'none'}}>
						<li>同步教学</li>
						<li>视频资源</li>
						<li>试卷资源</li>
						<li>素材资源</li>
					</ul>
				</div>
				<div className={style.GoTop_Btn+' '+style.GoTop_Btn_2}></div>
			</div>
		)
	}
}

export default GoTop