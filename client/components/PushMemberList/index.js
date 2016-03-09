import React, { PropTypes, Component } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'

import SearchBox from '../SearchBox'
import Checkbox from '../Checkbox'
import Btn from '../Btn'
import Select from '../Select'
import GoTop from '../GoTop'


class PushMemberList extends Component{

	constructor(props, context) {
    super(props, context)
  }

  render(){

  	return (
      <div className={style.PushMemberList}>
        <SearchBox />
        <div className={style.PushMemberList_tabBtn}>
          <Btn css={{width:'4rem'}} title='快捷选择' />
          <Btn css={{width:'4rem',marginLeft:'0.2rem'}} title='精确查找' />
        </div>
        <div className={style.PushMemberList_content}>
          <Select />&nbsp;&nbsp;&nbsp;
          <Select />
          <ul className={style.PushMemberList_namelist+' '+bStyle.f16}>
            <li><label><Checkbox /><span className={style.PushMemberList_name}>如蕾</span></label></li>
            <li><label><Checkbox /><span className={style.PushMemberList_name}>孤竹</span></label></li>
            <li><label><Checkbox /><span className={style.PushMemberList_name}>丹晴</span></label></li>
            <li><label><Checkbox /><span className={style.PushMemberList_name}>尔梅</span></label></li>
          </ul>
        </div>
          
        <div className={style.PushMemberList_buttom}>
          <span className={style.PushMemberList_checkAll}><Checkbox /></span>
          <Btn css={{width:'3rem'}} title='推送' />
        </div>
        <GoTop />
      </div>
  	)
  }
}

export default PushMemberList