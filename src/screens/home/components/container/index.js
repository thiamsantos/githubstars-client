import React from 'react'
import PropTypes from 'prop-types'
import style from './style.css'

const Container = ({children}) => (
  <div className={`container has-text-centered ${style.container}`}>
    {children}
  </div>
)

Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default Container
