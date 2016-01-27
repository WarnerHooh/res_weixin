
import React, { Component, PropTypes } from 'react'
import style from './style.css'
import bStyle from '../../bundle/base.css'

//导入组件
import SearchBox from '../../components/SearchBox'
import Tile from '../../components/Tile'
 
class TeacherList extends Component {
  render() {
    let Isrc = require('./images/TeacherList_banner.png')
    let avatarSrc = require('./images/avatar.gif')
    return (
      <div>
        <SearchBox />
        <div className={style.TeacherList_banner} style={{backgroundImage:'url('+Isrc+')'}}></div>
        <ul className={style.TeacherList_list}>
          <li>
            <div className={style.TeacherList_avatar}><img src={avatarSrc} /></div>
            <div className={style.TeacherList_infoCntr}>
              <h2 className={style.TeacherList_name+' '+bStyle.f18}>宁静(语文)</h2>
              <span className={style.TeacherList_school+' '+bStyle.f14}>成都七中</span>

              <div className={style.TeacherList_evaluation}>
                <div className={style.TeacherList_evaluationItem+' '+bStyle.f14}>
                  <span>贡献数:</span><span className={style.TeacherList_number+' '+bStyle.f24}>500</span>
                </div>
                <div className={style.TeacherList_evaluationItem+' '+bStyle.f14}>
                  <span>质量:</span><span className={style.TeacherList_number+' '+bStyle.f24}>4.7</span>
                </div>
              </div>

              <div className={style.TeacherList_followBtn}>+关注</div>
            </div>
          </li>

          <li>
            <div className={style.TeacherList_avatar}><img src={avatarSrc} /></div>
            <div className={style.TeacherList_infoCntr}>
              <h2 className={style.TeacherList_name+' '+bStyle.f18}>宁静(语文)</h2>
              <span className={style.TeacherList_school+' '+bStyle.f14}>成都七中</span>

              <div className={style.TeacherList_evaluation}>
                <div className={style.TeacherList_evaluationItem+' '+bStyle.f14}>
                  <span>贡献数:</span><span className={style.TeacherList_number+' '+bStyle.f24}>500</span>
                </div>
                <div className={style.TeacherList_evaluationItem+' '+bStyle.f14}>
                  <span>质量:</span><span className={style.TeacherList_number+' '+bStyle.f24}>4.7</span>
                </div>
              </div>

              <div className={style.TeacherList_followBtn}>+关注</div>
            </div>
          </li>

          <li>
            <div className={style.TeacherList_avatar}><img src={avatarSrc} /></div>
            <div className={style.TeacherList_infoCntr}>
              <h2 className={style.TeacherList_name+' '+bStyle.f18}>宁静(语文)</h2>
              <span className={style.TeacherList_school+' '+bStyle.f14}>成都七中</span>

              <div className={style.TeacherList_evaluation}>
                <div className={style.TeacherList_evaluationItem+' '+bStyle.f14}>
                  <span>贡献数:</span><span className={style.TeacherList_number+' '+bStyle.f24}>500</span>
                </div>
                <div className={style.TeacherList_evaluationItem+' '+bStyle.f14}>
                  <span>质量:</span><span className={style.TeacherList_number+' '+bStyle.f24}>4.7</span>
                </div>
              </div>

              <div className={style.TeacherList_followBtn}>+关注</div>
            </div>
          </li>
          
          <li>
            <div className={style.TeacherList_avatar}><img src={avatarSrc} /></div>
            <div className={style.TeacherList_infoCntr}>
              <h2 className={style.TeacherList_name+' '+bStyle.f18}>宁静(语文)</h2>
              <span className={style.TeacherList_school+' '+bStyle.f14}>成都七中</span>

              <div className={style.TeacherList_evaluation}>
                <div className={style.TeacherList_evaluationItem+' '+bStyle.f14}>
                  <span>贡献数:</span><span className={style.TeacherList_number+' '+bStyle.f24}>500</span>
                </div>
                <div className={style.TeacherList_evaluationItem+' '+bStyle.f14}>
                  <span>质量:</span><span className={style.TeacherList_number+' '+bStyle.f24}>4.7</span>
                </div>
              </div>

              <div className={style.TeacherList_followBtn}>+关注</div>
            </div>
          </li>

          <li>
            <div className={style.TeacherList_avatar}><img src={avatarSrc} /></div>
            <div className={style.TeacherList_infoCntr}>
              <h2 className={style.TeacherList_name+' '+bStyle.f18}>宁静(语文)</h2>
              <span className={style.TeacherList_school+' '+bStyle.f14}>成都七中</span>

              <div className={style.TeacherList_evaluation}>
                <div className={style.TeacherList_evaluationItem+' '+bStyle.f14}>
                  <span>贡献数:</span><span className={style.TeacherList_number+' '+bStyle.f24}>500</span>
                </div>
                <div className={style.TeacherList_evaluationItem+' '+bStyle.f14}>
                  <span>质量:</span><span className={style.TeacherList_number+' '+bStyle.f24}>4.7</span>
                </div>
              </div>

              <div className={style.TeacherList_followBtn}>+关注</div>
            </div>
          </li>

          <li>
            <div className={style.TeacherList_avatar}><img src={avatarSrc} /></div>
            <div className={style.TeacherList_infoCntr}>
              <h2 className={style.TeacherList_name+' '+bStyle.f18}>宁静(语文)</h2>
              <span className={style.TeacherList_school+' '+bStyle.f14}>成都七中</span>

              <div className={style.TeacherList_evaluation}>
                <div className={style.TeacherList_evaluationItem+' '+bStyle.f14}>
                  <span>贡献数:</span><span className={style.TeacherList_number+' '+bStyle.f24}>500</span>
                </div>
                <div className={style.TeacherList_evaluationItem+' '+bStyle.f14}>
                  <span>质量:</span><span className={style.TeacherList_number+' '+bStyle.f24}>4.7</span>
                </div>
              </div>

              <div className={style.TeacherList_followBtn}>+关注</div>
            </div>
          </li>

          <li>
            <div className={style.TeacherList_avatar}><img src={avatarSrc} /></div>
            <div className={style.TeacherList_infoCntr}>
              <h2 className={style.TeacherList_name+' '+bStyle.f18}>宁静(语文)</h2>
              <span className={style.TeacherList_school+' '+bStyle.f14}>成都七中</span>

              <div className={style.TeacherList_evaluation}>
                <div className={style.TeacherList_evaluationItem+' '+bStyle.f14}>
                  <span>贡献数:</span><span className={style.TeacherList_number+' '+bStyle.f24}>500</span>
                </div>
                <div className={style.TeacherList_evaluationItem+' '+bStyle.f14}>
                  <span>质量:</span><span className={style.TeacherList_number+' '+bStyle.f24}>4.7</span>
                </div>
              </div>

              <div className={style.TeacherList_followBtn}>+关注</div>
            </div>
          </li>

        </ul>
      </div>
    )
  }
}

export default TeacherList