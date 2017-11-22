import React from 'react'

/**
 * 程序入口
 */
export default class App extends React.Component{

  render(){
    return (<div>{this.props.children}</div>)
  }
}
