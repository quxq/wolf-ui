/**
 * Created by quxiangqian on 2017/12/6.
 */
import React from 'react'
import styles from './RightLayout.less'
import { List } from 'wolf'

export default class RightLayout extends React.Component {
  /**
   *
   * 配置区
   * =======================================================================================================================
   */
  config={
    listConfig: { url: '/sortname', param: { parentId: 0 }},
  }

  sortName = (props)=>{
    const row = props.datasource
    return <div className={styles.templet}>
      <img src="/images/hear.jpg" width="50px" height="50px"/>
      <span>
         <h3>{row.work}</h3>
         <label>{row.name} {row.job}</label>
      </span>
      <u>
        {row.sortid}
      </u>
    </div>
  }

  render () {
    const SortName = this.sortName;
    return (
      <div >

        <div className={styles.sortbar}><span>绩效排行榜</span></div>
        <div className={styles.sortname}>
        <List config={this.config.listConfig} >
          <SortName></SortName>
        </List>
        </div>
      </div>
    )
  }
}
