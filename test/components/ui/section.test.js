import React from 'react'
import renderer from 'react-test-renderer'
import Section from '../../../src/components/ui/section'

describe('<Section /> component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Section>
          <div>
Some content
          </div>
        </Section>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
