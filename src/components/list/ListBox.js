/**
 * Created by quxiangqian on 2017/11/30.
 */
import React from 'react'


export default class ListBox extends React.Component {
  constructor (props) {
    super(props)
  }

  subrender = (props, _datasrouce) => {
    return React.Children.map(props.children, (child) => {
      return React.cloneElement(child, {
        // 把父组件的props.name赋值给每个子组件
        datasource: _datasrouce,
        ...this.props,
      })
    })
  }

  render () {
    return (<div className="listbox">
      {this.props.dataSource.map((item) => {
        // console.log(this.props.children)
        // this.props.children.props = { datasource: item }
        return this.subrender(this.props, item)
      })}
    </div>
    )
  }
}
