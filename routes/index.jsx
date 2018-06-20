import React,{ Component } from 'react'
import { browserHistory, Router } from 'react-router'
import App from '../src/App'
import Home from '../src/pages/Home'
import NotFound from '../src/pages/NotFound'

export default class Main extends Component {
  render() {
    return <Router history={browserHistory} routes={[
      {
        path:'/',
        component: App,
        indexRoute: {
          component: Home
        },
        childRoutes: [

        ]
      },
      {
        path:'/',
        component: NotFound
      }
    ]}>
    </Router>
  }
}
