import {Menu, Icon, Layout, Dropdown} from 'antd'
import React, {Component} from 'react'
import {Link} from 'react-router'
const SubMenu = Menu.SubMenu
const {Header} = Layout
import './styles'
export default class Topbar extends Component {
  state = {
    collapsed: false
  };

  componentDidMount() {}

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const menu = (<Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">切换校区</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">退出登录</a>
      </Menu.Item>
    </Menu>);
    return (<Header style={{
        background: '#fff',
        padding: 0
      }}>
      <Icon className="trigger" type={this.props.collapsed
          ? 'menu-unfold'
          : 'menu-fold'} onClick={this.props.toggle}/>
      <Dropdown overlay={menu} trigger={['hover']} className='menu-drop'>
        <a className="ant-dropdown-link" href="#">
          Username
          <Icon type="down"/>
        </a>
      </Dropdown>
    </Header>)
  }
}
