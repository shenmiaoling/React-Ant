import React, {Component} from 'react'
import {Router, Route} from 'react-router'
import App from '../src/App'
import Home from '../src/pages/Home'
import NotFound from '../src/pages/NotFound'

export default[
  {
    path: '/',
    component: App,
    indexRoute: {
      component: Home
    },
    childRoutes: []
  }, {
    path : '*',
    component: NotFound
  }
]
