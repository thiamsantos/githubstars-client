import React from 'react'
import PropTypes from 'prop-types'

const Timer = ({onResetClick, seconds}) => (
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

Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
  onResetClick: PropTypes.func.isRequired
}

export default Timer
