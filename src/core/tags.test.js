import {stringifyTags} from './tags'

describe('tags', () => {
  it('should stringify the tags', () => {
    const actual = stringifyTags(['elixir', 'js'])
    const expected = '#elixir #js'

    expect(actual).toBe(expected)
  })
})
