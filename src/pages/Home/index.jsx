import React,{ Component, Fragment } from 'react'
import { DatePicker,Button } from 'antd';
import './styles.styl'
export default class Home extends Component {
  render() {
    return <Fragment>
      <DatePicker />
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
      <h4 className="title">ssssssssshome</h4>
    </Fragment>
  }
}
