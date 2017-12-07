/**
 * Created by quxiangqian on 2017/12/6.
 */
import React from 'react'
import BorderSubLayout from './BorderSubLayout'

export default class BorderLayout extends React.Component {
  parseComponent=() => {
    let comps = []
    React.Children.map(this.props.children, (child) => {
      if (child.type !== BorderSubLayout) {
        console.error('组件不符合规范，子布局必须是BorderLayout.Item')
      } else {
        comps.push(React.cloneElement(child, { leftWidth: this.props.leftWidth, topHeight: this.props.topHeight, rightWidth:this.props.rightWidth,className: child.props.solt, key: child.props.solt }))
      }
    })
    return comps
  }

  render () {
    return (<div className="border-layout">{this.parseComponent()}</div>)
  }
}

BorderLayout.Item = BorderSubLayout
