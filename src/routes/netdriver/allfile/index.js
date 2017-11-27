import { AdminFindLayout, Component } from 'wolf'
import AllfileDataGrid from './AllfileDataGrid'
import { Button ,Radio} from 'antd'

export default class Allfile extends Component {
  /**
   *
   * 配置区
   * =======================================================================================================================
   */
   state={
     selectinfo: '',
     filesnum:0,
   }


  /**
   *
   * 配置区结束
   * =======================================================================================================================
   * 事件区结束
   */

  selectedFiles = (files) => {
    if(files.length>0){
      this.setState({ selectinfo: `已选中：${files.length} 个文件/文件夹`,filesnum:files.length })
    }else{
      this.setState({ selectinfo: '',filesnum:files.length })
    }
  }

  render () {
    return (
      <AdminFindLayout topHeight={80} vspace={0}>
        <div style={{ marginLeft: 10 }}>
          <div style={{ lineHeight: '40px' }}>
            <Button type="primary" icon="plus" size="large" onClick={this.addHandle} >上传</Button>
            <Button style={{ marginLeft: 10 }} icon="plus" size="large" onClick={this.addSubHandle} >新建文件夹</Button>
            <Button style={{ marginLeft: 10 }} icon="plus" size="large" onClick={this.delHandle} >离线下载</Button>
            {
              this.state.filesnum>0?
              (<Button.Group size="large" style={{ marginLeft: 10 }}>
                <Button value="large">分享</Button>
                <Button value="default">共享</Button>
                <Button value="small">下载</Button>
              </Button.Group>
              ):(<span></span>)
            }

          </div>
          <div style={{ lineHeight: '40px' }}>{this.state.selectinfo}</div>
        </div>
        <AllfileDataGrid ref="atg" selectedFiles={this.selectedFiles} />
      </AdminFindLayout>
    )
  }
}
