import Component from '../Component'
import { Table } from 'antd'
import styles from './AntDataGrid.less'
/**
 *
 */
export default class AntDataGrid extends Component {
  state = {
    loading: false,
    pagination: { showQuickJumper: true, showSizeChanger: true },
  }

  data = [];


  componentDidMount () {
    this.treehttp = this.http()
    this.treehttp.url = this.props.config.url
    if (this.props.isPagination) {
      let pager = this.state.pagination
      pager.current = 1
      pager.pageSize = 14
      pager.startNum = 0
      pager.defaultCurrent = 1
      pager.total = 1000
      pager.showTotal = this.showTotal
    }
    // dd

    this.load()
  }

  handleTableChange = (pagination, filters, sorter) => {
    const pager = this.state.pagination
    pager.current = pagination.current
    pager.pageSize = pagination.pageSize
    pager.startNum = pagination.current * pagination.pageSize - pagination.pageSize
    // alert(pager.current)
    // this.props.queryForm.pageSize = pager.pageSize
    // console.log(this.props.queryForm)
    // this.setState({
    //   pagination: pager,
    // })
    this.load()
  }

  /**
   * 加载数据
   * @param pid
   * @param callback
   * @param key
   */
  load=() => {
    this.treehttp.data = { ...this.props.config.param, ...this.state.pagination }

    this.treehttp.post((data) => {
      if (this.props.isPagination) {
        this.state.pagination.total = data.total
      }
      this.data = data.list
      this.setState({
        loading: false,
      })
    })
  }

  render () {
    return (
      <Table className={this.props.isPagination ? styles.antDatagridPage : styles.antDatagrid} pagination={this.props.isPagination ? this.state.pagination : false} onChange={this.props.isPagination ? this.handleTableChange : () => {}} columns={this.props.columns} scroll={{ y: true }} {...this.props} ref="dg" dataSource={this.data} />
    )
  }
}

