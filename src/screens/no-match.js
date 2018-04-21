import React from 'react'
import PropTypes from 'prop-types'

const NoMatch = ({location}) => (
  <h3>
    No match for <code>{location.pathname}</code>
  </h3>
)

NoMatch.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default NoMatch
