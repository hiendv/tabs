import { deepmerge } from '../src'

describe('deepmerge', () => {
  it('works', () => {
    expect(deepmerge({ foo: { bar: 'bar' }, baz: 'bazz' }, { foo: { qux: 'qux' }, baz: 'baz' })).toEqual({ foo: { bar: 'bar', qux: 'qux' }, baz: 'baz' })
  })

  it('works with array', () => {
    expect(deepmerge({ foo: [1] }, { foo: [2, 3] })).toEqual({ foo: [1, 2, 3] })
  })

  it('returns target when source is non-object', () => {
    expect(deepmerge({ foo: 'bar' }, 1)).toEqual({ foo: 'bar' })
  })

  it('returns source when target is non-object', () => {
    expect(deepmerge(undefined, { foo: 'bar' })).toEqual({ foo: 'bar' })
  })
})
