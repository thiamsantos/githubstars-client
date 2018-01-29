import React from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import AsyncRoute from './containers/async-route'

const App = () => (
  <Router>
    <Switch>
      <AsyncRoute exact path="/" component={import('./screens/home')}/>
      <AsyncRoute path="/about" component={import('./screens/about')}/>
      <AsyncRoute path="/topics" component={import('./screens/topics')}/>
      <AsyncRoute path="/timer" component={import('./screens/timer')}/>
      <AsyncRoute component={import('./screens/no-match')}/>
    </Switch>
  </Router>
)

export default App
