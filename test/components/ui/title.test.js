import React from 'react'
import renderer from 'react-test-renderer'
import Title from '../../../src/components/ui/title'

describe('<Title /> component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Title>
Some cool title
                                 </Title>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
