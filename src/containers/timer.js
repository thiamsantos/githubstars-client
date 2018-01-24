import React, {Component} from 'react'
import TimerPresentation from '../components/timer'

export default class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {seconds: 0}
    this.handleResetClick = this.handleResetClick.bind(this)
  }

  tick() {
    this.setState(prevState => ({
      ...prevState,
      seconds: prevState.seconds + 1
    }))
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  handleResetClick() {
    this.setState(prevState => ({
      ...prevState,
      seconds: 0
    }))
  }

  render() {
    const {seconds} = this.state

    return (
      <TimerPresentation
        seconds={seconds}
        onResetClick={this.handleResetClick}
      />
    )
  }
}
