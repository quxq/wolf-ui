import React from 'react'
import { Link } from 'react-router-dom'

import { DynamicSubRoute } from 'utils'

export default class Dept extends React.Component{

  render(){
    console.log(this.props)
    return (
      <div>
        部门管理
      </div>
    )
  }
}
