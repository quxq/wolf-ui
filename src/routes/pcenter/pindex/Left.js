/**
 * Created by quxiangqian on 2017/12/6.
 */
import React from 'react'
import styles from './LeftLayout.less'

export default class LeftLayout extends React.Component {
  render () {
    return (
      <div>
        <div className={styles.hear}>
           <p id="bg"></p>
           <img src="/images/hear.jpg"/>
           <div className={styles.personinfo}>
             <span>
                <label>本月已工作</label>
                <h3>175小时</h3>
             </span>
             <span>
               <label>所属部门</label>
                <h3>研发部</h3>
             </span>
             <span>
               <label>本月已产生价值</label>
                <h3>¥19759</h3>
             </span>
             <span>
               <label>部门岗位</label>
                <h3>前端开发</h3>
             </span>
           </div>
        </div>
      </div>
    )
  }
}
