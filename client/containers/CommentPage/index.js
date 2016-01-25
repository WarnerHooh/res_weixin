import React, { Component, PropTypes } from 'react'
import style from './style.css'
//导入组件
import CommentList from '../../components/CommentList'
import CommentInput from '../../components/CommentInput'
 
class CommentPage extends Component {
  render() {
    return (
    	<div>
    		<CommentInput />
	    	<CommentList />
      </div>
    )
  }
}

export default CommentPage
