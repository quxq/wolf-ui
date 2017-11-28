/**
 * Created by quxiangqian on 2017/11/28.
 */
import React from 'react'
import { Form } from 'antd'

export default class WolfForm extends React.Component {



  render () {
    console.log(this.props)
    console.log(Form.create()(this.props))
    return (
      <div>{this.props.children}</div>
    )
  }
}
const AntForm = Form
export { WolfForm , AntForm }
