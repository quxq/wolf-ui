/**
 * Created by quxiangqian on 2017/11/27.
 */

import { AntDataGrid, Component } from 'wolf'
import { Menu, Dropdown, Icon, Input, Button } from 'antd'


class EditCell extends Component {
  state = {
    v: '',
  }
  handleOk =() => {
    this.props.value.name = this.state.v
    this.props.value.editable = false
    if (this.props.updateRecord) {
      this.props.updateRecord(0, this.props.value)
    }
  }
  handleCancel =() => {
    this.props.value.editable = false
    if (this.props.updateRecord) {
      this.props.updateRecord(1)
    }
  }
  onChange =(e) => {
    this.setState({ v: e.target.value })
  }
  render () {
    return (<div>
      {this.props.editable
        ? <span>
          <span style={{ margin: '-5px 5px', display: 'inline-block' }}><Input defaultValue={this.props.value.name} onChange={this.onChange} /></span>
          <Button.Group style={{ margin: '-5px 5px', display: 'inline-block' }}>
            <Button onClick={this.handleOk}><Icon type="check" />OK</Button>
            <Button onClick={this.handleCancel}><Icon type="close" />Cancel</Button>
          </Button.Group>
        </span>
        : this.props.value.name
      }
    </div>)
  }
}


export default class AllfileDataGrid extends Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    overkey: 0,
    editable: false,
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
              <a onClick={() => { this.editCell(record) }}>重命名</a>
            </Menu.Item>
          </Menu>
        )

        let tools
        if (this.state.overkey === record.files_id) {
          tools = (<span><Icon type="share-alt" style={{ fontSize: 16, color: '#08c' }} /> <Dropdown overlayStyle={{ marginLeft: '40px' }} overlay={menu}><Icon type="ellipsis" style={{ marginLeft: '16px', fontSize: 16, color: '#08c' }} /></Dropdown></span>)
        }
        let filetype
        if (record.f_t === 3) {
          filetype = (<Icon type="file" style={{ fontSize: 24, color: '#c8be91', marginRight: 16 }} />)
        }
        if (record.f_t === 2) {
          filetype = (<Icon type="folder" style={{ fontSize: 24, color: '#cca020', marginRight: 16 }} />)
        }
        if (record.f_t === 1) {
          filetype = (<Icon type="folder-add" style={{ fontSize: 24, color: '#86cc32', marginRight: 16 }} />)
        }
        return { children: <div style={{ display: 'flex' }}><div style={{ display: 'flex', flexFlow: 'row', width: '500px' }}>{filetype}
          <EditCell editable={record.editable} value={record} updateRecord={this.updateRecord} />
        </div>{tools}</div>,
        props: { style: { padding: 0, margin: 0, lineHeight: '30px' } },
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

  editCell = (record) => {
    record.editable = true
    this.state.editable = true
    this.setState({ selectedRowKeys: [] })
  }

  updateRecord = (state, record) => {
    alert(record.name)
    this.state.editable = false
  }

  rowClassName =(record, index) => {
    if (this.state.selectedRowKeys.findIndex((value, index, arr) => {
      return value == record.files_id
    }) !== -1) {
      return 'selected'
    }
    return ''
  }

  onRowClick = (record, index, event) => {
    if (this.state.editable) {
      // this.setState({ selectedRowKeys: [] })
      return
    }
    // record.fileselect = true;
    // this.rowSelection.selectedRowKeys=[record.customer_id]
    if (record.f_t === 1) {
      if (this.props.selectedFiles) {
        this.props.selectedFiles([])
        this.setState({ selectedRowKeys: [] })
      }
      return
    }
    if (this.props.selectedFiles) {
      this.props.selectedFiles([record.key])
    }

    this.setState({ selectedRowKeys: [record.key] })
  }
  rowKey =(record) => {
    record.key = record.files_id
    return record.files_id
  }

  onRowMouseEnter =(record, index, event) => {
    if (this.state.selectedRowKeys.length < 2) {
      this.setState({ overkey: record.files_id })
    } else {
      this.setState({ overkey: 0 })
    }
  }

  render () {
    const { selectedRowKeys } = this.state
    const rowSelection = {
      selectedRowKeys,
      hideDefaultSelections: true,
      onChange: (selectedRowKeys, selectedRows) => {
        if (this.props.selectedFiles) {
          this.props.selectedFiles(selectedRows)
        }

        if (selectedRowKeys.length > 1) {
          this.setState({ selectedRowKeys, overkey: 0 })
        } else {
          this.setState({ selectedRowKeys })
        }
      },
      onSelection: (!this.state.editable ? this.onSelection : () => {}),
      getCheckboxProps: record => ({
        disabled: record.f_t === 1 || this.state.editable, // Column configuration not to be checked
      }),
    }
    return (
      <AntDataGrid config={this.config.atgConfig} onRowMouseEnter={this.onRowMouseEnter} rowKey={this.rowKey} rowClassName={this.rowClassName} onRowClick={this.onRowClick} rowSelection={rowSelection} isPagination={false} columns={this.config.columns} ref="atg" />
    )
  }
}
