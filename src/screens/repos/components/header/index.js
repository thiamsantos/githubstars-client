import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="level">
    <div className="level-left">
      <h1 className="title">githubstars</h1>
    </div>
    <div className="level-right">
      <Link to="/">home</Link>
    </div>
  </nav>
)

export default Header
