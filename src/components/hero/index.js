import React from 'react'
import PropTypes from 'prop-types'
import style from './style.css'

const Hero = ({children}) => (
  <div className="hero is-fullheight">
    <div className={`hero-body ${style.body}`}>{children}</div>
  </div>
)

Hero.propTypes = {
  children: PropTypes.node.isRequired
}

export default Hero
