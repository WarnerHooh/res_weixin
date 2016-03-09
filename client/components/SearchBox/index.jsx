import React, { PropTypes, Component } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'

class SearchBox extends Component{

	constructor(props, context) {
		super(props, context)
		this.state = {
			menuText:'全部'
		}
	}

	handleMenuClick(e){

	}

	handleMenuChange(e){
		let target = e.target
		this.setState({
			menuVal:target.value,
			menuText:target.options[target.options.selectedIndex].text
		})
	}

	render() {
		return (
			<header className={style.searchBox}>
				<div className={style.searchInput_cntr}>
					<div className={style.searchMenu_cntr}>
						<div className={style.searchMenu_ico}></div>
						<div className={style.searchMenu_val}>{this.state.menuText}</div>  
						<select className={style.searchMenu} onChange={::this.handleMenuChange}>
							<option value='1' className={style.searchMenu_list}>全部</option>
							<option value='2' className={style.searchMenu_list}>微课</option>
							<option value='3' className={style.searchMenu_list}>名师课堂</option>
							<option value='4' className={style.searchMenu_list}>名师课堂</option>
							<option value='5' className={style.searchMenu_list}>4</option>
							<option value='6' className={style.searchMenu_list}>5</option>
							<option value='7' className={style.searchMenu_list}>6</option>
							<option value='8' className={style.searchMenu_list}>7</option>
							<option value='9' className={style.searchMenu_list}>8</option>
						</select>
					</div>
					<div className={style.searchInput}>
						<div className={style.searchInput_ico}>{this.props.placeholder}</div>
						<input type='text' ref='searchInput' className={bStyle.f14} onFocus={(event)=>event.target.style.zIndex=2} onBlur={(event)=>{if(event.target.value.length==0)event.target.style.zIndex=1}}/>
					</div>
					<ipnut type="button" className={style.searchBtn+' '+bStyle.f14}>搜索</ipnut>
				</div>
			</header>
		)
	}
}

export default SearchBox