import React from 'react'
import renderer from 'react-test-renderer'
import About from '../../src/screens/about'

describe('<About /> component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<About/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
