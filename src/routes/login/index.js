import React from 'react'
import { Button, Row, Form, Input } from 'antd'
import { AppConfig  } from 'config'
import styles from './index.less'

const FormItem = Form.Item

/**
 * 登 录
 */
class Login extends React.Component{

  handleOk = () =>{
    this.props.form.validateFieldsAndScroll((err, values) => {
       if(!err){
         this.props.toPath('/admin')
       }
    })
  }

  render(){
    console.log(AppConfig)
    const { getFieldDecorator } = this.props.form
    return (
      <div className={styles.form}>
        <div className={styles.logo}>
          <img alt={'logo'} src={AppConfig.logo} />
          <span>{AppConfig.name}</span>
        </div>
      <Form>
        <FormItem hasFeedback>
          {getFieldDecorator('username', {
            rules: [{
              required: true, message: '请输入用户账号!',
            }],
          })(
            <Input size="large"  placeholder="Username" onPressEnter={this.handleOk} />
          )}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,message: '请输入密码!',
              },
            ],
          })(<Input size="large" type="password" onPressEnter={this.handleOk} placeholder="Password" />)}
        </FormItem>
        <Row>
          <Button type="primary" size="large" onClick={this.handleOk} > 登 录 </Button>
        </Row>
      </Form>
      </div>
    )
  }
}

const LoginForm = Form.create()(Login)

export default LoginForm
