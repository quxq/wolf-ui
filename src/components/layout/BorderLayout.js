/**
 * Created by quxiangqian on 2017/12/6.
 */
import React from 'react'

export default class BorderLayout extends React.Component {
  parseComponent=() => {
    let comps=[]
    React.Children.map(this.props.children, (child) => {
      console.log(child)
      React.cloneElement(child, { ...this.props })
      comps.push(child)
    })
    return comps;
  }

  render () {
    return (<div>{this.parseComponent()}</div>)
  }
}
