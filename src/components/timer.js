import React, {Component} from 'react'
import autobind from 'autobind-decorator'

export default class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {seconds: 0}
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }))
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  @autobind reset() {
    this.state.seconds = 0
  }

  render() {
    return [
      <div>Seconds: {this.state.seconds}</div>,
      <button onClick={this.reset}>Reset</button>
    ]
  }
}
