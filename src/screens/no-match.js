import React from 'react'
import PropTypes from 'prop-types'
import BaseScreen from '../containers/base-screen'

const NoMatch = ({location}) => (
  <BaseScreen>
    <div>
      <h3>
        No match for
        {' '}
        <code>
          {location.pathname}
        </code>
      </h3>
    </div>
  </BaseScreen>
)

NoMatch.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default NoMatch
