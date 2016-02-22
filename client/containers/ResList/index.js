import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import style from './style.css'

//导入组件
import SearchBox from '../../components/SearchBox'
import FileItem from '../../components/FileItem'
 
class ResList extends Component {
	render() {
		console.log(this.props.params);
		return (
			<div>
				<SearchBox />
				<div style={{marginTop:'1.2rem'}}>
					<FileItem />
					<FileItem />
					<FileItem />
					<FileItem />
					<FileItem />
					<FileItem />
					<FileItem />
					<FileItem />
					<FileItem />
				</div>	
			</div>
		)
	}
}
function mapStateToProps(state) {
	return {
		todos: state.todos,
		params: state.params
	}
}

export default connect(
	mapStateToProps
)(ResList)