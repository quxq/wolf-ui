import React from 'react'
import Component from '../Component'

export default class List extends Component {
  state={
    loading: false,
  }
  constructor (props) {
    super(props)
    this.data = []
  }
  componentDidMount () {
    this.listhttp = this.http()
    this.listhttp.url = this.props.config.url

    this.load()
  }
  load = () => {
    this.listhttp.data = { ...this.props.config.param }
    this.listhttp.post((data) => {
      this.data = data.list
      this.setState({ loading: true })
    })
  }
  subrender = (props,_datasrouce) => {
    return React.Children.map(props.children, (child) => {
      return React.cloneElement(child, {
        // 把父组件的props.name赋值给每个子组件
        datasource: _datasrouce,
      })
    })
  }
  render () {


    return (<div className="list">
      {this.data.map((item) => {
        // console.log(this.props.children)
        // this.props.children.props = { datasource: item }
        return this.subrender(this.props,item)
      })}
    </div>
    )
  }
}
