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
      <Menu mode="horizontal" className="logOut" onClick={this.clear}>
        <SubMenu title={<span> < Icon type = "user" /> 永固 < /span>}>
          <Menu.Item key="logOut">
            <Link to="/login">退出</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
      <Icon className="screenFull" type="arrows-alt" onClick={this.screenFull}/>
    </Header>)
  }
}
