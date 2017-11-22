import React from 'react'
import { Link } from 'react-router-dom'

import { DynamicSubRoute } from 'utils'

export default class Login extends React.Component{

  render(){
    console.log(this.props)
    return (

      <div>
      <h1>hello the world111111</h1>
        <Link to="/login/a">a</Link>
        <Link to="/login/b">b</Link>
        <button onClick={()=>{
           this.props.toPath('/login')
      }}>sdfdf</button>

      </div>
    )
  }
}
