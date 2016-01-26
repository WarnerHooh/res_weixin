
import React, { Component, PropTypes } from 'react'
import style from './style.css'
//导入组件
import PushMemberList from '../../components/PushMemberList'
 
class PushList extends Component {
  render() {
    return (
    	<div>
        <PushMemberList />
      </div>
    )
  }
}

export default PushList