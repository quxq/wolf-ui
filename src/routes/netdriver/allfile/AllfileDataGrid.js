/**
 * Created by quxiangqian on 2017/11/27.
 */

import { AntDataGrid, Component } from 'wolf'
import { Menu, Dropdown,Icon} from 'antd'

export default class AllfileDataGrid extends Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    overkey:0,
  }
  /**
   *
   * 配置区
   * =======================================================================================================================
   */
  config={
    atgConfig: { url: '/driver/allfile', param: { pageSize: 15, startNum: 0 }, map: { key: 'dept_id', pkey: 'p_dept_id' } },
    columns: [{
      title: '文件名',
      dataIndex: 'name',
      key: 'name',
      width: '600px',
      render: (text, record) => {

        const menu = (
          <Menu>
            <Menu.Item>
              <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">下载</a>
            </Menu.Item>
            <Menu.Item>
              <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">移动</a>
            </Menu.Item>
            <Menu.Item>
              <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">复制</a>
            </Menu.Item>
            <Menu.Item>
              <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">重命名</a>
            </Menu.Item>
          </Menu>
        )

        let tools;
        if(this.state.overkey===record.files_id){
          tools=(<span><Icon type="share-alt" style={{ fontSize: 16, color: '#08c' }} /> <Dropdown overlayStyle={{marginLeft:'40px'}} overlay={menu}><Icon type="ellipsis" style={{marginLeft:'16px', fontSize: 16, color: '#08c' }}/></Dropdown></span>)
        }
        let filetype;
        if(record.f_t===3){
          filetype=(<Icon type="file" style={{ fontSize: 24, color: '#c8be91' ,marginRight:16}} />)
        }
        if(record.f_t===2){
          filetype=(<Icon type="folder" style={{ fontSize: 24, color: '#cca020',marginRight:16 }} />)
        }
        if(record.f_t===1){
          filetype=(<Icon type="folder-add" style={{ fontSize: 24, color: '#86cc32',marginRight:16 }} />)
        }
        return { children: <div style={{display:'flex'}}><div style={{display:'flex',flexFlow: "row",width:'500px'}}>{filetype}{text}</div>{tools}</div>
        ,props:{style:{padding:0,margin:0,lineHeight:'30px'}}
        }
      },
    }, {
      title: '大小',
      dataIndex: 'size',
      key: 'size',
      width: '100px',
    }, {
      title: '修改日期',
      dataIndex: 'cdate',
      key: 'cdate',
    }],
  }


  /**
   *
   * 配置区结束
   * =======================================================================================================================
   * 事件区结束
   */


  rowClassName =(record, index) => {
    if (this.state.selectedRowKeys.findIndex(function(value, index, arr) {
        return value ==record.files_id
      })!==-1) {
      return 'selected'
    }
    return ''
  }

  onRowClick = (record, index, event) => {
    // record.fileselect = true;
    // this.rowSelection.selectedRowKeys=[record.customer_id]
    this.setState({ selectedRowKeys: [record.key] })
  }
  rowKey =(record) => {
    record.key=record.files_id
    return record.files_id
  }

  onRowMouseEnter =(record, index, event) => {
    this.setState({overkey:record.files_id});
  }

  render () {
    const { selectedRowKeys } = this.state
    const rowSelection = {
      selectedRowKeys,
      hideDefaultSelections: true,
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({ selectedRowKeys });
      },
      onSelection: this.onSelection,
      getCheckboxProps:record => ({
        disabled: record.f_t === 1, // Column configuration not to be checked
      }),
    }
    return (
        <AntDataGrid config={this.config.atgConfig} onRowMouseEnter={this.onRowMouseEnter} rowKey={this.rowKey} rowClassName={this.rowClassName} onRowClick={this.onRowClick} rowSelection={rowSelection} isPagination={false} columns={this.config.columns} ref="atg" />
    )
  }
}
