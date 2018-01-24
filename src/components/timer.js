import React, {Component} from 'react'
import PropTypes from 'prop-types'

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

Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
  onResetClick: PropTypes.func.isRequired
}
