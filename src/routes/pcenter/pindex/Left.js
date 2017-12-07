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
             <span>
               <label>持续跟进项目</label>
                <h3>6个</h3>
             </span>
             <span>
               <label>物品使用</label>
                <h3>5件</h3>
             </span>
             <span>
               <label>直连客户</label>
                <h3>7位</h3>
             </span>
             <span>
               <label>提出建议</label>
                <h3>10条</h3>
             </span>
           </div>
        </div>
      </div>
    )
  }
}
