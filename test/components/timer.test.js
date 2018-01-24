import React from 'react'
import renderer from 'react-test-renderer'
import {mount} from 'enzyme'
import Timer from '../../src/components/timer'

describe('<Timer /> component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Timer seconds={12} onResetClick={jest.fn()}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should have a click button', () => {
    const handleResetClick = jest.fn()
    const wrapper = mount(
      <Timer seconds={12} onResetClick={handleResetClick}/>
    )
    wrapper.find('button').simulate('click')
    expect(handleResetClick.mock.calls.length).toBe(1)
  })
})
