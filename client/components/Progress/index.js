import React, { PropTypes, Component } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'

class Progress extends Component{

	constructor(props, context) {
		super(props, context)
		this.state = {
      progress: this.props.progress || 0
    }
	}

	componentDidMount(){
		let progress = this.state.progress
		const left = this.refs.left
		const right = this.refs.right
		if(progress<=50){
			left.style.transform=`rotate(0deg)`
			right.style.transform=`rotate(${progress*3.6}deg)`
		}else{
			right.style.transform=`rotate(180deg)`
			left.style.transform=`rotate(${(progress-50)*3.6}deg)`
		}
	}

	render(){

		const state = this.state
		return (
			<div className={style.Progress}>
				<div className={style.pie_left}><div ref='left' className={style.left}></div></div>
				<div className={style.pie_right}><div ref='right' className={style.right}></div></div>
				<div className={style.mask}><span>{state.progress}</span>%</div>
			</div>
		)
	}
}

export default Progress