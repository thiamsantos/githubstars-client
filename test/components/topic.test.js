import React from 'react'
import renderer from 'react-test-renderer'
import Topic from '../../src/components/topic'

describe('<Topic /> component', () => {
  it('should render correctly', () => {
    const match = {
      params: {
        topicId: 'somerandomid'
      }
    }

    const tree = renderer.create(<Topic match={match}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
