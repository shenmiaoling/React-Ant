import React from 'react'
import {
  Route,
  Router,
  IndexRoute,
  browserHistory
} from 'react-router'
import Application from '../src/App'
import Home from '../src/pages/Home'
import NotFound from '../src/pages/NotFound'

module.exports = ()=>{
  return <Router history={browserHistory}>
    <Route path='/' component={Application}>
      <IndexRoute component={Home} />
      <Route path='*' component={NotFound}/>
    </Route>
  </Router>
}
