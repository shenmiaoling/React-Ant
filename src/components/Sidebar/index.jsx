import {Layout, Menu, Icon} from 'antd';
const {Header, Sider} = Layout;
import React, {Component} from 'react'
export default class Sidebar extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (<Sider trigger={null} collapsible="collapsible" collapsed={this.props.collapsed}>
      <div className="logo"/>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Icon type="user"/>
          <span>ddd</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera"/>
          <span>nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload"/>
          <span>nav 3</span>
        </Menu.Item>
      </Menu>
    </Sider>);
  }
}
