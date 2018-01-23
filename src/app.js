import React, {Component} from 'react'
import Async from 'react-code-splitting'

export default class App extends Component {
  render() {
    return <Async load={import('./components/timer')}/>
  }
}
