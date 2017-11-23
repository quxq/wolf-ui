import Component from '../Component'
import {Table} from 'antd';
/**
 *
 */
export default class AntTreeGrid extends Component{
  state = {
    loading: false,
  };
  data = [{
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [{
      key: 11,
      name: 'John Brown',
      age: 42,
      address: 'New York No. 2 Lake Park',
    }, {
      key: 12,
      name: 'John Brown jr.',
      age: 30,
      address: 'New York No. 3 Lake Park',
      children: [{
        key: 121,
        name: 'Jimmy Brown',
        age: 16,
        address: 'New York No. 3 Lake Park',
      }],
    }, {
      key: 13,
      name: 'Jim Green sr.',
      age: 72,
      address: 'London No. 1 Lake Park',
      children: [{
        key: 131,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 2 Lake Park',
        children: [{
          key: 1311,
          name: 'Jim Green jr.',
          age: 25,
          address: 'London No. 3 Lake Park',
        }, {
          key: 1312,
          name: 'Jimmy Green sr.',
          age: 18,
          address: 'London No. 4 Lake Park',
        }],
      }],
    }],
  }, {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }];

  componentDidMount()
  {
     this.treehttp=this.http();
     this.treehttp.url=this.props.config.url;
  }

  /**
   * 用于树结构关联
   */
  treedata={keypool:{},pkeypool:{}}

  /**
   * 对于节点的解析
   * @param data
   */
  parseNode=(data,k)=>{
    data.list.map(item=>{
      let key=item[this.props.config.map.key]
      if(k){
        item.key=k+"_k_"+key
      }else{
        item.key="k_"+key
      }
      item.children=[];
      this.treedata.keypool[item.key]=item;
      //父ID池中查看是否存在，如果不存在
      if(!this.treedata.pkeypool[item[this.props.config.map.pkey]])
      {
         //创建父亲节点的容器
         this.treedata.pkeypool[item[this.props.config.map.pkey]]={}
      }
      this.treedata.pkeypool[item[this.props.config.map.pkey]][key]=item;

    })

  }

  load=(pid,callback,key)=>{
    this.treehttp.data=this.props.config.param;
    if(pid){
      for(let k in  this.props.config.param){
        this.props.config.param[k]=pid
      }
      this.treehttp.data=this.props.config.param;
    }
    this.treehttp.post((data)=>{
       if(callback){
         this.parseNode(data,key)
         callback(this.treedata.pkeypool[pid])
       }else{
         this.parseNode(data)
         this.data=data.list;
       }
       this.setState({
         loading:false
       })
    })
  }

  onExpand=(expanded, record)=>{
     if(expanded)
     {
       console.log(record[this.props.config.map.key])
       this.load(record[this.props.config.map.key],(data)=>{
          record.children=[];
          for(let k in data){
            record.children.push(data[k]);
          }
       },record.key)
     }

  }

  render(){
    return (
      <Table columns={this.props.columns} onExpand={this.onExpand} {...this.props} ref="dg" dataSource={this.data} pagination={false}/>
    )
  }
}

