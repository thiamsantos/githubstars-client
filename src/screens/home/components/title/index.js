import React from 'react'
import PropTypes from 'prop-types'
import style from './style.css'

const Title = ({text}) => <h1 className={`title ${style.title}`}>{text}</h1>

Title.propTypes = {
  text: PropTypes.string.isRequired
}

export default Title
