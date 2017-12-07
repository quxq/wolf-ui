/**
 * Created by quxiangqian on 2017/12/6.
 */
import React from 'react'
import { Link } from 'react-router-dom'

export default class Tab extends React.Component {
  parseItem=() => {
    console.log(this.props)
    return this.props.dataSource.map((item) => {
      let c = {}
      if (item.path === this.props.location.pathname) {
        c.className = 'active'
      }
      return <span key={item.key} className="bar" ><Link to={item.path} {...c}>{item.name}</Link></span>
    })
  }
  render () {
    return <div className="tab" style={this.props.style} >{this.parseItem()}</div>
  }
}
