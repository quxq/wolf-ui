
import { AdminFindLayout, AntDataGrid, Component } from 'wolf'
import { Button } from 'antd'

export default class Allfile extends Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
  }
  /**
   *
   * 配置区
   * =======================================================================================================================
   */
  config={
    atgConfig: { url: '/customer/page', param: { pageSize: 15, startNum: 0 }, map: { key: 'dept_id', pkey: 'p_dept_id' } },
    columns: [{
      title: '文件名',
      dataIndex: 'name',
      key: 'name',
      width: '40%',
      render: (text, record) => {
        let color = 'red'
        if (!record.fileselect) {
          color = '#444'
        }
        return { children: <div style={{ color }}>{text}</div> }
      },
    }, {
      title: '大小',
      dataIndex: 'age',
      key: 'age',
      width: '30%',
    }, {
      title: '修改日期',
      dataIndex: 'address',
      key: 'address',
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
        return value ==record.customer_id
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
    record.key=record.customer_id
    return record.customer_id
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
    }
    return (
      <AdminFindLayout topHeight={60} vspace={0}>
        <div style={{ lineHeight: '60px', marginLeft: 10 }}>
          <Button type="primary" icon="plus" size="large" onClick={this.addHandle} >上传</Button>
          <Button style={{ marginLeft: 16 }} icon="plus" size="large" onClick={this.addSubHandle} >新建文件夹</Button>
          <Button style={{ marginLeft: 16 }} icon="plus" size="large" onClick={this.delHandle} >离线下载</Button>
        </div>
        <AntDataGrid config={this.config.atgConfig} rowKey={this.rowKey} rowClassName={this.rowClassName} onRowClick={this.onRowClick} rowSelection={rowSelection} isPagination={false} columns={this.config.columns} ref="atg" />
      </AdminFindLayout>
    )
  }
}
