import React from 'react'
import renderer from 'react-test-renderer'
import Subtitle from '../../../src/components/ui/subtitle'

describe('<Subtitle /> component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Subtitle>Some cool subtitle</Subtitle>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
