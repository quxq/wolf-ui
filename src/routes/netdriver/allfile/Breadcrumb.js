/**
 * Created by quxiangqian on 2017/12/5.
 */

import { Breadcrumb } from 'antd'
import { Component } from 'wolf'
import { Link } from 'react-router-dom'

export default class FileBreadcrumb extends Component {
  state={
    load: true,
  }
  data=[];

  componentDidMount () {
    let http = this.http()
    http.url = '/driver/finddir'
    http.data = { id: this.props.parentId }

    http.post((_data) => {
      this.data = _data.list.sort((a, b) => a.sortid < b.sortid)
      // console.log(data.list.sort((a, b) => a.sortid < b.sortid))
      this.setState({ load: true })
    })
  }

  render () {
    let row=this.data
    let id=0
    if(row.length>1){
      id=row[row.length-1].parentid;
    }
    //let id=row[0].parentid

    return (
      <Breadcrumb separator="&gt;" style={{ display: 'inline-block' }}>
        <Breadcrumb.Item key="home" ><Link to={"/netdriver/allfile/"+id}>返回上一页</Link></Breadcrumb.Item>
        {
          row.map((a) => { return <Breadcrumb.Item key={a.files_id} ><Link to={"/netdriver/allfile/"+a.files_id}>{a.name}</Link></Breadcrumb.Item> })
        }
        <Breadcrumb.Item >全部文件</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}

