import React, { PropTypes, Component } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'

class SearchBox extends Component{

	constructor(props, context) {
		super(props, context)
	}

	render() {
		return (
			<header className={style.searchBox}>
				<div className={style.searchInput_cntr}>
					<div className={style.searchMenu_cntr}>
						<div className={style.searchMenu_ico}>></div>
						<ul className={style.searchMenu}>
							<li className={style.searchMenu_list}>全部全部</li>
						</ul>
					</div>
					<div className={style.searchInput}>
						<div className={style.searchInput_ico}></div>
						<input type='text' ref='searchInput' className={bStyle.f14} onFocus={(event)=>event.target.style.zIndex=2} onBlur={(event)=>{if(event.target.value.length==0)event.target.style.zIndex=1}}/>
					</div>
					<ipnut type="button" className={style.searchBtn+' '+bStyle.f14}>搜索</ipnut>
				</div>
			</header>
		)
	}
}

export default SearchBox