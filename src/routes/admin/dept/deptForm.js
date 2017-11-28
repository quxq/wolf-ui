/**
 * Created by quxiangqian on 2017/11/28.
 */

import { Form, Input } from 'antd'
import { Component } from 'wolf'


const FormItem = Form.Item

export default class _DeptForm extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    }
    return (
      <Form>
        <FormItem  label="部门名称"   {...formItemLayout}>
          {
            getFieldDecorator('name', {rules: [{ required: true, message: '请输入部门名称!' }],})
            (<Input style={{ width: '100%' }} />)
          }
        </FormItem>
        <FormItem label="排序号"  {...formItemLayout} >
          {
            getFieldDecorator('sort_id', {rules: [{ required: true, message: '请输入排序号' }],})
            (<Input style={{ width: '100%' }} />)
          }
        </FormItem>

      </Form>
    )
  }
}

