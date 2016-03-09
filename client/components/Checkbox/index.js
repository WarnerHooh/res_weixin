import React, { PropTypes, Component } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'

class Checkbox extends Component{

	constructor(props, context) {
    super(props, context)
  }

  render(){
  	return (
  		<div  ref='label' className={style.Checkbox}>
  			<label><input ref='checkbox' className={style.CheckboxInput} onChange={::this.checked} type='checkbox' />✔</label>
  		</div>
  	)
  }

  checked(){
  	let checkedStyle = style.Checkbox+' '+style.Checkbox_checked;
  	let unCheckStyle = style.Checkbox;
  	let status = this.refs.checkbox.checked;
  	let elem = this.refs.label;
  	if(status){
  		elem.setAttribute("class", checkedStyle); 
  	}else{
  		elem.setAttribute("class", unCheckStyle); 
  	}
  	
  }
}

export default Checkbox