import React from 'react'
import { Link } from 'react-router-dom'

import { DynamicSubRoute } from 'utils'

export default class Person extends React.Component{

  render(){
    console.log(this.props)
    return (
      <div>
        人员管理
      </div>
    )
  }
}
