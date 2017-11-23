import React from 'react'
import { AdminFindLayout, AntTreeGrid } from 'wolf'
import { Button, Icon } from 'antd'

export default class Dept extends React.Component {
  /**
   *
   * 配置区
   * =======================================================================================================================
   */
  config={
    atgConfig: { url: '/dept/findByParentId', param: { parentId: 0 }, map: { key: 'dept_id', pkey: 'p_dept_id' } },
    columns: [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '40%',
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '30%',
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }],
  }

  /**
   *
   * 配置区结束
   * =======================================================================================================================
   * 事件区开始
   */

  delHandle=() => {
    // this.setState({ loading:true })
    this.refs.atg.delNode({ dept_id: 1000, p_dept_id: 0, name: '测试' })
  }

  addHandle=() => {
    // this.setState({ loading:true })
    this.refs.atg.addRoot({ dept_id: 1000, p_dept_id: 0, name: '测试' })
  }
  addSubHandle=() => {
    // this.setState({ loading:true })
    this.refs.atg.addSub(1000, { dept_id: 1001, p_dept_id: 1000, name: '测试1' })
    this.refs.atg.addSub(1000, { dept_id: 1002, p_dept_id: 1000, name: '测试2' })
    this.refs.atg.addSub(1001, { dept_id: 1003, p_dept_id: 1001, name: '测试3' })
    this.refs.atg.addSub(1001, { dept_id: 1004, p_dept_id: 1001, name: '测试4' })
  }
  /**
   *
   * 配置区结束
   * =======================================================================================================================
   * 事件区结束
   */


  render () {
    return (
      <AdminFindLayout topHeight={60}>
        <div style={{ lineHeight: '60px', marginLeft: 10 }}>
          <Button type="primary" icon="plus" size="large" onClick={this.addHandle} >新增</Button>
          <Button type="primary" style={{marginLeft:16}} icon="plus" size="large" onClick={this.addSubHandle} >新增下级</Button>
          <Button type="primary" style={{marginLeft:16}} icon="plus" size="large" onClick={this.delHandle} >删除</Button>
        </div>
        <AntTreeGrid config={this.config.atgConfig} columns={this.config.columns} ref="atg" />
      </AdminFindLayout>
    )
  }
}
