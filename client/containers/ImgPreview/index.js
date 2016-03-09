import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import style from './style.css'

//导入组件
import ImgView from '../../components/ImgView'
 
class imgPreView extends Component {
  render() {
    return (
      <div> 
        <ImgView />
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
)(imgPreView)