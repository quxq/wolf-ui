import React from 'react'
import { List, Templet as Templet1  } from 'wolf'


export default class Templet extends React.Component {
  /**
   *
   * 配置区
   * =======================================================================================================================
   */
  config={
    listConfig: { url: '/message', param: { parentId: 0 }, map: { key: 'dept_id', pkey: 'p_dept_id', sort: 'sort_id', subcount: 'subcount' } },
  }


  /**
   *
   * 配置区结束
   * =======================================================================================================================
   * 事件区开始
   */
  componentDidMount () {

  }

  /**
   *
   * 配置区结束
   * =======================================================================================================================
   * 事件区结束
   */
  messageCallBak=(row)=>{
    alert(row.message);
  }

  render () {
    return (
      <List config={this.config.listConfig} >
         <Templet1.MessageBook callBack={this.messageCallBak}></Templet1.MessageBook>
      </List>
    )
  }
}
