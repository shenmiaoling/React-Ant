import React,{ Component } from 'react'
// import { browserHistory } from 'react-router'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'
import App from '../src/App'
import Home from '../src/pages/Home'
import NotFound from '../src/pages/NotFound'

export default class Main extends Component {
  render() {
    return <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='*' component={NotFound}/>
      </Switch>
    </BrowserRouter>
  }
}
