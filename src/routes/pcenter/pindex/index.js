/**
 * Created by quxiangqian on 2017/12/6.
 */
/**
 * Created by quxiangqian on 2017/12/6.
 */
import React from 'react'
import { BorderLayout, Tab } from 'wolf'
import { Card, Calendar,Tabs} from 'antd'

import LeftLayout from './Left'

const TabPane = Tabs.TabPane

export default class PcenterIndex extends React.Component {
  render () {
    return (
      <BorderLayout leftWidth={221} topHeight={0} rightWidth={221}>
        <BorderLayout.Item solt="left" style={{background:'#efefef',borderRight:'solid 1px #efefef'}}>
          <LeftLayout/>
        </BorderLayout.Item>
        <BorderLayout.Item solt="right" style={{background:'#efefef',borderLeft:'solid 1px #efefef'}}>
          <LeftLayout/>
        </BorderLayout.Item>
        <BorderLayout.Item solt="center" style={{background:'#fbfbfb'}}>
          <div style={{ display: "flex" }}>
            <div className="infobox">
              <h2>总事务数</h2>
              <h1>150</h1>
              <div>未完成：120 已完成：30 <br/>参与人：50 客户：100</div>
            </div>
            <div className="infobox">
              <h2>物品总数</h2>
              <h1>150</h1>
              <div>已使用：120 未使用：30</div>
            </div>
            <div className="infobox">
              <h2>财务情况</h2>
              <h1>1.5万</h1>
              <div>已报销：1万 未报销：5千</div>
            </div>
          </div>
          <div >
            <Tabs defaultActiveKey="1" style={{margin:16,background:'#fff',border:'solid 1px #cccccc'}} tabBarExtraContent={<span style={{margin:'0 20px 0 0'}}><a style={{marginLeft:16}}>待处理</a><a style={{marginLeft:16}}>已处理</a><a style={{marginLeft:16}}>未完成</a><a style={{marginLeft:16}}>已完成</a></span>}>
              <TabPane tab="我最近创建的事务（10）" key="1">Content of Tab Pane 1</TabPane>
              <TabPane tab="我参与的事务（20）" key="2">Content of Tab Pane 2</TabPane>
            </Tabs>
          </div>
        </BorderLayout.Item>

      </BorderLayout>
    )
  }
}
