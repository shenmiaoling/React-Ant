import React, {Component, Fragment} from 'react'
import {Form, Input, Button, notification, Icon} from 'antd'
const FormItem = Form.Item;
import './styles.styl'

class LoginPage extends React.Component {
  constructor() {
    super()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let n = this.props.form.getFieldsValue().username
    let p = this.props.form.getFieldsValue().password
    if (n === '123' && p === '123') {
      // 表单的路由处理
      history.push('/index')
    } else {
      // this.openNotificationWithIcon('info')
    }
  }

  // 返回一个弹框对象，提示用户名和密码
  openNotificationWithIcon = (type) => {
    notification[type]({message: '用户名&密码', description: '都是：123', duration: 6, icon: <Icon type="smile-circle" style={{
        color: '#108ee9'
      }}/>})
  }

  componentDidMount() {
    // this.openNotificationWithIcon('info')
  }

  render() {
    const {getFieldDecorator} = this.props.form
    return (<div className="loginpagewrap">
      <div className="box">
        <p>教育收费系统</p>
        <div className="loginWrap">
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              {
                getFieldDecorator('userName', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your username!'
                    }
                  ]
                })(<Input placeholder="请输入您的手机号"/>)
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: '请输入密码'
                    }
                  ]
                })(<Input type="password" placeholder="请输入您的登录密码"/>)
              }
            </FormItem>
            <Button type="primary" htmlType="submit" className="loginBtn">Login</Button>
          </Form>
        </div>
      </div>
    </div>)
  }
}

let Login = Form.create()(LoginPage)
export default Login
