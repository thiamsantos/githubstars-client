import React from 'react'
import Async from 'react-code-splitting'
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom'

const asyncComponent = component => props => (
  <Async load={component} componentProps={props}/>
)

const AsyncRoute = ({component, ...props}) => {
  return <Route component={asyncComponent(component)} {...props}/>
}

AsyncRoute.propTypes = {
  component: PropTypes.instanceOf(Promise).isRequired
}

export default AsyncRoute
