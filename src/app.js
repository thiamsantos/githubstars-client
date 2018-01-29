import React from 'react'
import Async from 'react-code-splitting'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/navbar'

const Home = () => <Async load={import('./components/home')}/>
const About = () => <Async load={import('./components/about')}/>
const Topics = props => (
  <Async load={import('./components/topics')} componentProps={props}/>
)
const Timer = () => <Async load={import('./containers/timer')}/>

const App = () => (
  <Router>
    <div>
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/timer" component={Timer}/>
    </div>
  </Router>
)

export default App
