import React from 'react'
import {AdminFindLayout,AntTreeGrid} from 'wolf'
import { Button, Icon } from 'antd';

export default class Dept extends React.Component{


  /**
   *
   * 配置区
   * =======================================================================================================================
   */
  config={
    atgConfig:{ url:"/dept/findByParentId" ,param:{parentId:0},map:{key:'dept_id',pkey:'p_dept_id'}},
    columns:[{
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
    }]
  }

  /**
   *
   * 配置区结束
   * =======================================================================================================================
   * 事件区开始
   */

  addHandle=()=>{
    this.setState({ loading:true })
    this.refs.atg.load();
  }
  /**
   *
   * 配置区结束
   * =======================================================================================================================
   * 事件区结束
   */


  render(){
    return (
      <AdminFindLayout topHeight={60}>
        <div style={{lineHeight:'60px',marginLeft:10}}>
          <Button type="primary"  icon="plus" size="large" onClick={this.addHandle} >新增</Button>
        </div>
        <AntTreeGrid config={this.config.atgConfig}  columns={this.config.columns} ref="atg" ></AntTreeGrid>
      </AdminFindLayout>
    )
  }
}
