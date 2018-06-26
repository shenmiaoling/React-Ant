import React, {Component, Fragment} from 'react'
import {Menu, Dropdown, Icon} from 'antd';
import './styles.styl'
const menu = (<Menu>
  <Menu.Item>
    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
  </Menu.Item>
  <Menu.Item>
    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
  </Menu.Item>
  <Menu.Item>
    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
  </Menu.Item>
</Menu>);
export default class Home extends Component {

  render() {
    return <Fragment>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" href="#">
          Hover me
          <Icon type="down"/>
        </a>
      </Dropdown>
    </Fragment>
  }
}
