import React from 'react'
import { Route , IndexRoute } from 'react-router'
import App from '../src/App'

const Home = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('../src/pages/Home').default)
  }, 'home')
};

const NotFound = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('../src/pages/NotFound').default)
  }, 'notFound')
};

export default (
    <Route path="/" component={App}>
      <IndexRoute getComponent={Home} />
      <Route path="*" getComponent={NotFound} />
    </Route>
)
