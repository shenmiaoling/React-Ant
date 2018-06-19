import React from 'react'
import { withRouter } from 'react-router'

module.exports = withRouter(React.createClass({
  render(){
    return <div className='app'>
      {this.props.children && React.cloneElement(this.props.children, {router: this.props.router})}
    </div>
  }
}))
