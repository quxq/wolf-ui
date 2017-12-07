/**
 * Created by quxiangqian on 2017/12/6.
 */
import React from 'react'

export default class BorderSubLayout extends React.Component {
  render () {
    console.log(this.props)
    let style = { ...this.props.style }
    if (this.props.solt === 'center') {
      style.marginTop = this.props.topHeight
      style.marginLeft = this.props.leftWidth
      style.marginRight = this.props.rightWidth
    }
    if (this.props.solt === 'top') {
      style.height = this.props.topHeight
    }
    if (this.props.solt === 'left') {
      style.marginTop = this.props.topHeight
      style.width = this.props.leftWidth
    }
    if (this.props.solt === 'right') {
      style.marginTop = this.props.topHeight
      style.width = this.props.rightWidth
    }
    return (<div className={this.props.className} style={style}>{this.props.children}</div>)
  }
}
