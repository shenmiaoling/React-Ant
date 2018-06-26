import {Menu, Icon, Layout} from 'antd'
import React, {Component} from 'react'
import {Link} from 'react-router'
const SubMenu = Menu.SubMenu
const {Header} = Layout
export default class Topbar extends Component {
  state = {
    username: '',
    collapsed: false
  };

  componentDidMount() {
    this.getUser()
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  getUser = () => {
    this.setState({username: 'Muyy'})
  }

  clear = (item) => {
    if (item.key === 'logOut') {
      this.props.clear()
    }
  }

  screenFull = () => {
    if (screenfull.enabled) {
      screenfull.request()
    }
  }
  render() {
    return (<Header style={{
        background: '#fff',
        padding: 0
      }}>
      <Icon className="trigger" type={this.props.collapsed
          ? 'menu-unfold'
          : 'menu-fold'} onClick={this.props.toggle}/>
      <Menu >
        <Menu.Item>菜单项</Menu.Item>
        <SubMenu title="子菜单">
          <Menu.Item>子菜单项</Menu.Item>
        </SubMenu>
      </Menu>
    </Header>)
  }
}
