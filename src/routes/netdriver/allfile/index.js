import { AdminFindLayout, Component } from 'wolf'
import AllfileDataGrid from './AllfileDataGrid'
import ToolBar from './ToolBar'

export default class Allfile extends Component {
  /**
   *
   * 配置区
   * =======================================================================================================================
   */
   state={
     selectinfo: '',
     filesnum: 0,
   }


  /**
   *
   * 配置区结束
   * =======================================================================================================================
   * 事件区结束
   */

  selectedFiles = (files) => {
    if (files.length > 0) {
      this.setState({ selectinfo: `已选中：${files.length} 个文件/文件夹`, filesnum: files.length })
    } else {
      this.setState({ selectinfo: '', filesnum: files.length })
    }
  }

  render () {
    return (
      <AdminFindLayout topHeight={80} vspace={0}>
        <div style={{ marginLeft: 10 }}>
          <ToolBar filesnum={this.state.filesnum} />
          <div style={{ lineHeight: '40px' }}>{this.state.selectinfo}</div>
        </div>
        <AllfileDataGrid ref="atg" selectedFiles={this.selectedFiles} />
      </AdminFindLayout>
    )
  }
}
