import React from 'react'
import PropTypes from 'prop-types'

const Title = ({children}) => (
  <h1 className="title">
    {children}
  </h1>
)

Title.propTypes = {
  children: PropTypes.node.isRequired
}

export default Title
