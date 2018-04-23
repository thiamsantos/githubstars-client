import {presentTags, stringifyTags, parseTags} from './tags'

describe('tags', () => {
  it('should present the tags', () => {
    const actual = presentTags(['elixir', 'js'])
    const expected = '#elixir #js'

    expect(actual).toBe(expected)
  })

  it('should stringify the tags', () => {
    const actual = stringifyTags(['elixir', 'js'])
    const expected = 'elixir, js'

    expect(actual).toBe(expected)
  })

  it('should parse tags', () => {
    const actual = parseTags('elixir, js')
    const expected = ['elixir', 'js']

    expect(actual).toEqual(expected)
  })

  it('should ignore duplicated tags', () => {
    const actual = parseTags('elixir, js, elixir')
    const expected = ['elixir', 'js']

    expect(actual).toEqual(expected)
  })

  it('should ignore support tags with strange whitespace', () => {
    const actual = parseTags('elixir   ,js')
    const expected = ['elixir', 'js']

    expect(actual).toEqual(expected)
  })

  it('should lowercase the tags', () => {
    const actual = parseTags('Elixir, JavaScript')
    const expected = ['elixir', 'javascript']

    expect(actual).toEqual(expected)
  })
})
