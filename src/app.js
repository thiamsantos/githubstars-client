import React from 'react'
import Async from 'react-code-splitting'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import {Provider} from 'unstated'
import './app.scss'

const Home = props => (
  <Async load={import('./screens/home')} componentProps={props} />
)

const Repos = props => (
  <Async load={import('./screens/repos')} componentProps={props} />
)

const NoMatch = props => (
  <Async load={import('./screens/no-match')} componentProps={props} />
)

const Login = () => <div>Login</div>

const App = () => (
  <Provider>
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users/:userId/repos" component={Repos} />
            <Route path="/404" component={NoMatch} />
            <Redirect to="/404" />
          </Switch>
        </Route>
      </Switch>
    </Router>
  </Provider>
)

export default App
