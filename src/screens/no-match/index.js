import React from 'react'
import {Link} from 'react-router-dom'
import Hero from '../../components/hero'

const NoMatch = () => (
  <Hero>
    <h3 className="is-size-1">404</h3>
    <p>We could not find the page you were looking for.</p>
    <Link to="/">home</Link>
  </Hero>
)

export default NoMatch
