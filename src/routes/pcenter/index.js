/**
 * Created by quxiangqian on 2017/12/6.
 */
import React from 'react'
import { BorderLayout, Tab } from 'wolf'
import { DynamicSubRoute } from 'utils'

export default class PCenter extends React.Component {
  tabDataSource=[
    { name: '工作台', path: '/pcenter/index', key: 1 },
    { name: '事务', path: '/pcenter/task', key: 2 },
    { name: '财务', path: '/pcenter/fance', key: 3 },
  ]
  render () {
    return (
      <BorderLayout topHeight={70}>
        <BorderLayout.Item solt="top">
          <div className="baner">
            <Tab dataSource={this.tabDataSource} {...this.props} style={{ top: '25px', left: '200px' }} />
          </div>
        </BorderLayout.Item>
        <BorderLayout.Item solt="center" style={{ background: '#FdFdFd' }}>
          <DynamicSubRoute {...this.props} />
        </BorderLayout.Item>

      </BorderLayout>
    )
  }
}
