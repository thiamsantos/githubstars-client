import React, {Component} from 'react'

export default class Timer extends Component {
  render() {
    const {onResetClick, seconds} = this.props

    return (
      <div>
        <p>
          Seconds:
          {seconds}
        </p>
        <button type="button" onClick={onResetClick}>
          Reset
        </button>
      </div>
    )
  }
}
