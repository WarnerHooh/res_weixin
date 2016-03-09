import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import style from './style.css'
import bStyle from '../../bundle/base.css'

//导入组件
import Select from '../../components/Select'
import Btn from '../../components/Btn'
 
class Upload extends Component {
  render() {
    console.log(this.props.params);
    return (
      <div>
        <div className={style.preView_list}>
          <div className={style.thumbImg}></div>
          <div className={style.thumbImg}></div>
          <div className={style.thumbImg}></div>
          <div className={style.thumbImg}></div>
        </div>
        <div className={style.fileInfo}>
          <span className={bStyle.f24}>共<span className={style.fileCount}>2</span>个视频，请选择上传位置</span>
          <Select css={{width:'100%',height:'1rem'}} />
          <Select css={{width:'100%',height:'1rem'}} />
          <span className={bStyle.f24}>请输入文件名称</span>
          <input className={style.fileName+' '+bStyle.f18} type='text' />
        </div>
        <div className={style.btnCntr}>
          <Btn title='确认上传' css={{width:'4.5rem',marginLeft:'0.4rem'}} />
          <Btn title='返回重选' css={{width:'4.5rem',marginLeft:'0.2rem'}} />
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
)(Upload)