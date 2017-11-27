import { AdminFindLayout, Component } from 'wolf'
import AllfileDataGrid from './AllfileDataGrid'
import { Button } from 'antd'

export default class Allfile extends Component {

  /**
   *
   * 配置区
   * =======================================================================================================================
   */



  /**
   *
   * 配置区结束
   * =======================================================================================================================
   * 事件区结束
   */



  render () {

    return (
      <AdminFindLayout topHeight={60} vspace={0}>
        <div style={{ lineHeight: '60px', marginLeft: 10 }}>
          <Button type="primary" icon="plus" size="large" onClick={this.addHandle} >上传</Button>
          <Button style={{ marginLeft: 16 }} icon="plus" size="large" onClick={this.addSubHandle} >新建文件夹</Button>
          <Button style={{ marginLeft: 16 }} icon="plus" size="large" onClick={this.delHandle} >离线下载</Button>
        </div>
        <AllfileDataGrid ref="atg" />
      </AdminFindLayout>
    )
  }
}
