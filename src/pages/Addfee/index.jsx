import React, {Component, Fragment} from 'react'
import {Breadcrumb} from 'antd';
export default class NotFound extends Component {
  render() {
    return <Fragment>
      <Breadcrumb>
        <Breadcrumb.Item>春田花花幼儿园</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">收费管理</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          缴费汇总
        </Breadcrumb.Item>
      </Breadcrumb>
    </Fragment>
  }
}
