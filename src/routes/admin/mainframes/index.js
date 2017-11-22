import React from 'react'
import { Link } from 'react-router-dom'

import { DynamicSubRoute } from 'utils'

export default class MainFrames extends React.Component{

  render(){
    console.log(this.props)
    return (
      <div>
        首页
        <Link to="/admin/dept">部门管理</Link>
        <Link to="/admin/person">人员管理</Link>
        <div>
            <DynamicSubRoute {...this.props}/>
        </div>
      </div>
    )
  }
}
