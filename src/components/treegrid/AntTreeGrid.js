import Component from '../Component'
import { Table } from 'antd'
import styles from './AntTreeGrid.less'
/**
 *
 */
export default class AntTreeGrid extends Component {
  state = {
    loading: false,
  }

  data = [];

  componentDidMount () {
    this.treehttp = this.http()
    this.treehttp.url = this.props.config.url
    this.load()
  }

  /**
   * 用于树结构关联
   */
  treedata={ keypool: {}, pkeypool: {} }

  /**
   * 对于节点的解析
   * @param data
   */
  parseNode=(data, k) => {
    data.list.map((item) => {
      let key = item[this.props.config.map.key]
      if (k) {
        item.key = `${k}_k_${key}`
      } else {
        item.key = `k_${key}`
      }
      item.children = []
      this.treedata.keypool[key] = item
      // 父ID池中查看是否存在，如果不存在
      if (!this.treedata.pkeypool[item[this.props.config.map.pkey]]) {
        // 创建父亲节点的容器
        this.treedata.pkeypool[item[this.props.config.map.pkey]] = {}
      }
      this.treedata.pkeypool[item[this.props.config.map.pkey]][key] = item
    })
  }
  /**
   * 加载数据
   * @param pid
   * @param callback
   * @param key
   */
  load=(pid, callback, key) => {
    this.treehttp.data = this.props.config.param
    if (pid) {
      for (let k in this.props.config.param) {
        this.props.config.param[k] = pid
      }
      this.treehttp.data = this.props.config.param
    }
    this.treehttp.post((data) => {
      if (callback) {
        this.parseNode(data, key)
        callback(this.treedata.pkeypool[pid])
      } else {
        this.parseNode(data)
        this.data = data.list
      }
      this.setState({
        loading: false,
      })
    })
  }
  /**
   * 当展开的时候执行事件
   * @param expanded
   * @param record
   */
  onExpand=(expanded, record) => {
    if (expanded) {
      console.log(record[this.props.config.map.key])
      this.load(record[this.props.config.map.key], (data) => {
        record.children = []
        for (let k in data) {
          record.children.push(data[k])
        }
      }, record.key)
    }
  }

  /**
   * 新增根节点
   * @param record
   */
  addRoot = (record) => {
    record.key = `k_${record[this.props.config.map.key]}`
    this.data.push(record)
    this.treedata.keypool[record[this.props.config.map.key]] = record
    this.treedata.pkeypool[0][record[this.props.config.map.key]] = record
    this.treedata.pkeypool[record[this.props.config.map.key]] = {}
    this.setState({ loading: true })
  }

  /**
   * 新增子节点
   * @param pid
   * @param record
   */

  addSub = (pid, record) => {
    let parentNode = this.treedata.pkeypool[pid]
    // console.log("父节点")
    // console.log(parentNode)
    if (parentNode[record[this.props.config.map.key]]) {
      return
    }
    parentNode[record[this.props.config.map.key]] = record
    if (!this.treedata.keypool[pid].children) {
      this.treedata.keypool[pid].children = []
    }
    this.treedata.keypool[record[this.props.config.map.key]] = record
    this.treedata.pkeypool[record[this.props.config.map.key]] = {}
    this.treedata.keypool[pid].children.push(record)
    record.key = `${this.treedata.keypool[pid].key}_k_${record[[this.props.config.map.key]]}`
    this.setState({ loading: true })
  }

  /**
   * 删除节点
   * @param record
   */
  delNode = (record) => {
    if (record[this.props.config.map.pkey] === 0) {
      this.data=this.data.filter(item=>item[this.props.config.map.key]!==record[this.props.config.map.key])
    } else {
      this.treedata.keypool[record[this.props.config.map.pkey]].children = this.treedata.keypool[record[this.props.config.map.pkey]].children.filter(item=>item[this.props.config.map.key]!==record[this.props.config.map.key])
    }

    delete this.treedata.pkeypool[record[this.props.config.map.pkey]][record[this.props.config.map.key]]
    delete this.treedata.keypool[record[this.props.config.map.key]]
    this.setState({ loading: true })
  }

  render () {
    return (
      <Table className={styles.anttreegrid} columns={this.props.columns} scroll={{y:true}}  onExpand={this.onExpand} {...this.props} ref="dg" dataSource={this.data} pagination={false} />
    )
  }
}

