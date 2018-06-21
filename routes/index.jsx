import React,{ Component } from 'react'
import { browserHistory, Router, Route } from 'react-router'
import App from '../src/App'
import Home from '../src/pages/Home'
import NotFound from '../src/pages/NotFound'

module.exports = () => {
  return <Router history={browserHistory} routes={[
    {
      path: '/',
      component: App,
      indexRoute:{
        component: Home
      },
      childRoutes: [
        {}
      ]
    },
    {
      path: '*',
      component: NotFound
    }
  ]}></Router>
}
