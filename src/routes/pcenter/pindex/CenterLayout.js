/**
 * Created by quxiangqian on 2017/12/6.
 */
import React from 'react'
import styles from './CenterLayout.less'
import { List } from 'wolf'
import { Card, Calendar, Tabs, Col, Row } from 'antd'
const TabPane = Tabs.TabPane

export default class CenterLayout extends React.Component {
  /**
   *
   * 配置区
   * =======================================================================================================================
   */
  config={
    listConfig: { url: '/task', param: { parentId: 0 }},
  }

  task = (props)=>{
    const row = props.datasource
    return <div className={styles.templet}>
      <span>
         <a>{row.name}</a>
      </span>
      <i>
        {row.cdate}
      </i>
    </div>
  }

  render () {
    const Task = this.task;
    return (
      <div className={styles.centerlayout}>
        <div className={styles.infoboxs}>
          <div className={styles.infobox}>
            <h2>总事务数</h2>
            <h1>150</h1>
            <div>未完成：120 已完成：30 <br />参与人：50 客户：100</div>
          </div>
          <div className={styles.infobox}>
            <h2>物品总数</h2>
            <h1>150</h1>
            <div>已使用：120 未使用：30</div>
          </div>
          <div className={styles.infobox}>
            <h2>财务情况</h2>
            <h1>1.5万</h1>
            <div>已报销：1万 未报销：5千</div>
          </div>
        </div>
        <div style={{marginLeft:16,marginRight:16}}>
          <Row gutter={16}>
            <Col span={12}>
              <Card title="待处理" style={{ marginTop: 6 }} bordered={false} extra={<a href="#">更多</a>}>
                <div className={styles.list}>
                  <List config={this.config.listConfig} >
                    <Task/>
                  </List>
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card title="正在进行" style={{ marginTop: 6 }} bordered={false} extra={<a href="#">更多</a>}>
                <div className={styles.list}>
                  <List config={this.config.listConfig} >
                    <Task/>
                  </List>
                </div>
              </Card>
            </Col>

          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Card title="已完成" style={{ marginTop: 16 }} bordered={false} extra={<a href="#">更多</a>}>
                <div className={styles.list}>
                  <List config={this.config.listConfig} >
                    <Task/>
                  </List>
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card title="已存档" style={{ marginTop: 16 }} bordered={false} extra={<a href="#">更多</a>}>
                <div className={styles.list}>
                  <List config={this.config.listConfig} >
                    <Task/>
                  </List>
                </div>
              </Card>
            </Col>

          </Row>
        </div>
      </div>
    )
  }
}
