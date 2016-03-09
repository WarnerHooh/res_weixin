import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import style from './style.css'

//导入组件
import BottomBar from '../../components/BottomBar'
 
class DocPreview extends Component {
  render() {
    return (
    	<div ref='pdfCntr' className={style.viewerContainer}>
        <iframe className={style.pdfIframe} ref='pdfIframe' width="100%" border='0' src="../../pdf/viewer.html"></iframe>
        <BottomBar />
      </div>
    )
  }
  componentDidMount(){
    const me = this
    setTimeout(function(){
      const cntrH = me.refs.pdfCntr.offsetHeight
      me.refs.pdfIframe.height = cntrH
    },100)
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
)(DocPreview)