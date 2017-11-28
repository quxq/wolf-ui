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
        item.key = `k_0_k_${key}`
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

        this.treedata.keypool[0] = { key: 'k_0' }
        this.treedata.keypool[0][this.props.config.map.key] = '0'
        this.treedata.keypool[0].children = data.list
        this.data = this.treedata.keypool[0].children
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
    if(record.loading===true){
      return ;
    }
    if (expanded) {
      console.log(record[this.props.config.map.key])
      this.load(record[this.props.config.map.key], (data) => {

        let item = []
        for (let k in data) {
          item.push(data[k])
        }
        record.children = [...record.children,...item.sort((a, b) => a[this.props.config.map.sort] > b[this.props.config.map.sort])]
        record.loading=true;
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
    this.data = this.data.sort((a, b) => a[this.props.config.map.sort] > b[this.props.config.map.sort])
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
    this.treedata.keypool[pid].children = this.treedata.keypool[pid].children.sort((a, b) => a[this.props.config.map.sort] > b[this.props.config.map.sort])
    this.setState({ loading: true })
  }

  /**
   * 删除节点
   * @param record
   */
  delNode = (record) => {
    if (record[this.props.config.map.pkey] === '0') {
      this.data = this.data.filter(item => item[this.props.config.map.key] !== record[this.props.config.map.key])
    } else if (this.treedata.keypool[record[this.props.config.map.pkey]]) {
      this.treedata.keypool[record[this.props.config.map.pkey]].children = this.treedata.keypool[record[this.props.config.map.pkey]].children.filter(item => item[this.props.config.map.key] !== record[this.props.config.map.key])
    }

    delete this.treedata.pkeypool[record[this.props.config.map.pkey]][record[this.props.config.map.key]]
    delete this.treedata.keypool[record[this.props.config.map.key]]
    this.setState({ loading: true })
  }

  /**
   * 修改节点
   * @param record
   */
  updateNode = (record) => {

  }

  /**
   * 移动到节点
   * @param currId
   * @param targetID
   */
  moveTo = (currId, targetID) => {

  }

  /**
   * 向上移动
   * @param record
   */
  moveUp = (record) => {
    // 找到当前父亲节点
    // alert(record.name)
    let pkey = this.treedata.keypool[record[this.props.config.map.pkey]]
    let index = pkey.children.findIndex(item => item[this.props.config.map.key] == record[this.props.config.map.key])
    if (index === 0) {
      console.log('已经是最前位置')
      return
    }
    let s = record[this.props.config.map.sort]
    let t = pkey.children[index - 1][this.props.config.map.sort]
    pkey.children[index - 1][this.props.config.map.sort] = s
    record[this.props.config.map.sort] = t
    pkey.children = pkey.children.sort((a, b) => a[this.props.config.map.sort] > b[this.props.config.map.sort])
    console.log(pkey.children)
    this.setState({ loading: false })
  }

  /**
   * 向下移动
   * @param record
   */
  moveDown = (record) => {
    let pkey = this.treedata.keypool[record[this.props.config.map.pkey]]
    let index = pkey.children.findIndex(item => item[this.props.config.map.key] == record[this.props.config.map.key])
    if (index === pkey.children.length - 1) {
      console.log('已经是最后位置')
      return
    }
    let s = record[this.props.config.map.sort]
    let t = pkey.children[index + 1][this.props.config.map.sort]
    pkey.children[index + 1][this.props.config.map.sort] = s
    record[this.props.config.map.sort] = t
    pkey.children = pkey.children.sort((a, b) => a[this.props.config.map.sort] > b[this.props.config.map.sort])
    // console.log(pkey.children)
    this.setState({ loading: false })
  }
  /**
   * 向左移动
   * @param record
   */
  moveLeft = (record) => {
    if (record[this.props.config.map.pkey] === '0') {
      alert('最上节点不能左移')
      return
    }
    let pkey = this.treedata.keypool[record[this.props.config.map.pkey]]
    let ppkey = this.treedata.keypool[pkey[this.props.config.map.pkey]]


    // 从父节点中删除当前节点
    // 及当前节点的后的节点 2期实现
    pkey.children = pkey.children.filter(item => item[this.props.config.map.key] !== record[this.props.config.map.key])

    record[this.props.config.map.sort] = pkey[this.props.config.map.sort] + 0.1
    ppkey.children.push(record)
    ppkey.children = ppkey.children.sort((a, b) => a[this.props.config.map.sort] > b[this.props.config.map.sort])
    record[this.props.config.map.pkey] = ppkey[this.props.config.map.key]
    this.changeSortId(record)
    this.changeKey(record, ppkey.key)
    this.setState({ loading: false })
  }

  changeSortId = (record) => {
    let pkey = this.treedata.keypool[record[this.props.config.map.pkey]]
    let index = pkey.children.findIndex(item => item[this.props.config.map.key] == record[this.props.config.map.key])
    let t = pkey.children[index - 1][this.props.config.map.sort]
    // record[this.props.config.map.sort] = t ++
    pkey.children.map((item, index1) => {
      if (index1 >= index) {
        t++
        item[this.props.config.map.sort] = t
      }
    })
  }

  changeKey = (record, key) => {
    console.log(record, key)
    record.key = `${key}_k_${record[this.props.config.map.key]}`
    record.children.map((item) => {
      this.changeKey(item, record.key)
    })
  }

  /**
   * 向右移动
   * @param record
   */
  moveRight = (record) => {
    let pkey = this.treedata.keypool[record[this.props.config.map.pkey]]
    let index = pkey.children.findIndex(item => item[this.props.config.map.key] == record[this.props.config.map.key])
    if (index === 0) {
      alert('当前节点处于节点之首，不能向右移动')
      return
    }
    pkey.children = pkey.children.filter(item => item[this.props.config.map.key] !== record[this.props.config.map.key])

    console.log(pkey.children)
    let lastnode = pkey.children[index - 1]
    if (!lastnode.children) {
      lastnode.children = []
    }
    record[this.props.config.map.sort] = lastnode.children.length + 1
    record[this.props.config.map.pkey] =lastnode[this.props.config.map.key]
    lastnode.children.push(record)
    // this.changeSortId(record)
    this.changeKey(record, lastnode.key)

    lastnode.children = lastnode.children.sort((a, b) => a[this.props.config.map.sort] > b[this.props.config.map.sort])
    if (lastnode[this.props.config.map.pkey] === '0') {
      this.data = pkey.children
    }
    console.log(this.data)
    this.setState({ loading: false })
    // let ppkey = this.treedata.keypool[pkey[this.props.config.map.pkey]]
  }

  render () {
    return (
      <Table className={styles.anttreegrid} columns={this.props.columns} scroll={{ y: true }} onExpand={this.onExpand} {...this.props} ref="dg" dataSource={this.data} pagination={false} />
    )
  }
}

