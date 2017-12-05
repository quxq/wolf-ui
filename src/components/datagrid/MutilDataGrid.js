import Component from '../Component'
import { Table } from 'antd'
import styles from './AntDataGrid.less'
import { ListBox ,Templet} from 'wolf'
/**
 *
 */
export default class MutilDataGrid extends Component {
  state = {
    loading: false,
    pagination: { showQuickJumper: true, showSizeChanger: true },
    togstyle: 0,
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

  togDgStyle = (num) => {
    // alert(num);
    this.setState({ togstyle: num })
  }

  handleTableChange = (pagination, filters, sorter) => {
    const pager = this.state.pagination
    pager.current = pagination.current
    pager.pageSize = pagination.pageSize
    pager.startNum = pagination.current * pagination.pageSize - pagination.pageSize
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
      if (this.props.loadAfter) {
        this.props.loadAfter((data))
      }
      this.setState({
        loading: true,
      })
    })
  }

  render () {
    return (<div>{
      this.state.togstyle === 0 ?
        <Table className={this.props.isPagination ? styles.antDatagridPage : styles.antDatagrid}
          pagination={this.props.isPagination ? this.state.pagination : false}
          onChange={this.props.isPagination ? this.handleTableChange : () => {
          }}
          columns={this.props.columns}
          scroll={{ y: true }}
          {...this.props}
          ref="dg"
          dataSource={this.data}
        />
        : (<ListBox {...this.props} dataSource={this.data} {...this.props}>
              <Templet.FileBox></Templet.FileBox>
           </ListBox>
          )
    }</div>)
  }
}

