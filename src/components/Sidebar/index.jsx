import {Layout, Menu, Icon} from 'antd';
const {Header, Sider} = Layout;
import React, {Component} from 'react'
const SubMenu = Menu.SubMenu;

export default class Sidebar extends Component {
  componentDidMount() {}
  render() {
    return (<Sider trigger={null} collapsible="collapsible" collapsed={this.props.collapsed}>
      <div className="logo"/>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} inlineCollapsed="{false}">
        <Menu.Item key="1">
          <Icon type="home"/>
          <span>学校首页</span>
        </Menu.Item>
        <SubMenu key="sub1" title={<span> < Icon type = "appstore-o" />< span > 收费管理</span></span>}>
          <Menu.Item key="2">新增收费</Menu.Item>
          <Menu.Item key="3">现场收费</Menu.Item>
          <Menu.Item key="4">缴费汇总</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span> < Icon type = "setting" />< span > 系统设置</span></span>}>
          <Menu.Item key="5">支付宝签约</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>);
  }
}
