import React, { PropTypes, Component } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'

import SearchBox from '../SearchBox'
import Checkbox from '../Checkbox'
import Btn from '../Btn'
import Select from '../Select'


class PushMemberList extends Component{

	constructor(props, context) {
    super(props, context)
  }

  render(){

  	return (
      <div className={style.PushMemberList}>
        <SearchBox />
        <div className={style.PushMemberList_tabBtn}>
          <Btn css={{width:'4rem'}} />
          <Btn css={{width:'4rem',marginLeft:'0.2rem'}} />
        </div>
        <div className={style.PushMemberList_content}>
          <Select />
          <Select />
        </div>
      </div>
  	)
  }
}

export default PushMemberList