import { AdminFindLayout, Component } from 'wolf'
import AllfileDataGrid from './AllfileDataGrid'
import ToolBar from './ToolBar'
import FileBreadcrumb from './Breadcrumb'

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

  togDgStyle =(num)=>{
    this.refs.atg.togDgStyle(num)
  }

  render () {
    return (
      <AdminFindLayout topHeight={80} vspace={0}>
        <div style={{ marginLeft: 10 }}>
          <ToolBar filesnum={this.state.filesnum} togDgStyle={this.togDgStyle}/>
          <div style={{ lineHeight: '40px' }}>
            <span>
              <FileBreadcrumb parentId={this.props.match.params.id}></FileBreadcrumb>
            </span>
            <span style={{marginLeft:16}}>{this.state.selectinfo}</span>
          </div>
        </div>
        <AllfileDataGrid ref="atg" parentId={this.props.match.params.id} selectedFiles={this.selectedFiles} />
      </AdminFindLayout>
    )
  }
}
