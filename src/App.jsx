import React, {Component} from 'react'
import {Layout, Menu, Icon, Dropdown} from 'antd';
const {Header, Sider, Content} = Layout;
import Topbar from './components/Topbar'
import Sidebar from './components/sideBar'
import {hot} from 'react-hot-loader'

class App extends Component {
  state = {
    collapsed: false
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (<Layout style={{
        height: "100vh"
      }}>
      <Sidebar collapsed={this.state.collapsed}/>
      <Layout>
        <Header style={{
            background: '#fff',
            padding: 0
          }}>
          <Icon className="trigger" type={this.state.collapsed
              ? 'menu-unfold'
              : 'menu-fold'} onClick={this.toggle}/>
        </Header>
        <Content style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280
          }}>
          {this.props.children}
        </Content>
      </Layout>
    </Layout>)
  }
}
export default hot(module)(App)
