import React from 'react'
import { AdminFindLayout, AntTreeGrid, Dialog, AntForm } from 'wolf'
import { Button, Icon } from 'antd'
import DeptDialog from './deptDialog'


export default class Dept extends React.Component {
  /**
   *
   * 配置区
   * =======================================================================================================================
   */
  config={
    atgConfig: { url: '/dept', param: { parentId: 0 }, map: { key: 'dept_id', pkey: 'p_dept_id', sort: 'sort_id', subcount: 'subcount' } },
    columns: [{
      title: '部门名称',
      dataIndex: 'name',
      key: 'name',
      width: '40%',
    }, {
      title: '',
      dataIndex: 'worker',
      key: 'worker',
      render: (text, record) => (
        <div>
          <span style={{ marginLeft: 10 }} onClick={() => { this.addSubHandle(record) }}><Icon type="plus" />新增</span>
          <span style={{ marginLeft: 10 }} onClick={() => { this.delHandle(record) }}><Icon type="delete" />删除</span>
          <span style={{ marginLeft: 10 }} onClick={() => { this.moveLeftHandle(record) }}><Icon type="arrow-left" />左移动</span>
          <span style={{ marginLeft: 10 }} onClick={() => { this.moveUpHandle(record) }}><Icon type="arrow-up" />上移动</span>
          <span style={{ marginLeft: 10 }} onClick={() => {this.moveDownHandle(record) }}><Icon type="arrow-down" />下移动</span>
          <span style={{ marginLeft: 10 }} onClick={() => {this.moveRightHandle(record) }}><Icon type="arrow-right" />右移动</span>
        </div>
      ),
    }],
  }

  /**
   *
   * 配置区结束
   * =======================================================================================================================
   * 事件区开始
   */
  componentDidMount () {
    this.depid = 100
  }
  delHandle=(record) => {
    // this.setState({ loading:true })
    this.refs.atg.delNode(record)
  }

  addHandle=() => {
    this.depid++
    this.command = 1
    this.refs.dialog.setTitle('新增部门')
    this.refs.dialog.show()

    console.log(this.refs.aaa)
    // this.setState({ loading:true })
    // this.refs.atg.addRoot({ dept_id: 1000, p_dept_id: 0, name: '测试' })
  }
  addSubHandle=(record) => {
    this.depid++
    this.command = 2
    this.curr = record
    this.refs.dialog.setTitle('新增子部门')
    this.refs.dialog.show()
  }

  moveUpHandle=(record) => {
    this.refs.atg.moveUp(record)
  }
  moveDownHandle=(record) => {
    this.refs.atg.moveDown(record)
  }
  moveLeftHandle=(record) => {
    this.refs.atg.moveLeft(record)
  }
  moveRightHandle=(record) => {
    this.refs.atg.moveRight(record)
  }

  submitOk = (values) => {
    if (this.command === 1) {
      this.refs.atg.addRoot({ dept_id: this.depid, p_dept_id: '0', name: values.name, sort_id: values.sort_id })
    }
    if (this.command === 2) {
      this.refs.atg.addSub(this.curr.dept_id, { dept_id: this.depid, p_dept_id: this.curr.dept_id, name: values.name, sort_id: values.sort_id })
    }
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

          <DeptDialog ref="dialog" submitOk={this.submitOk} />
        </div>

        <AntTreeGrid config={this.config.atgConfig} columns={this.config.columns} ref="atg" />
      </AdminFindLayout>
    )
  }
}
