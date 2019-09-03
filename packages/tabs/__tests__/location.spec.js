import { setHash } from '../src'

afterEach(() => {
  setHash('')
})

describe('setHash', () => {
  it('works', () => {
    expect(window.location.toString()).toEqual('http://localhost/')
    setHash('foobar')
    expect(window.location.toString()).toEqual('http://localhost/#foobar')
  })

  it('works with empty hash', () => {
    expect(window.location.toString()).toEqual('http://localhost/')
    setHash('foobar')
    setHash()
    expect(window.location.toString()).toEqual('http://localhost/')
  })

  it('works with duplicated hash', () => {
    expect(window.location.toString()).toEqual('http://localhost/')
    setHash('qux')
    setHash('qux')
    expect(window.location.toString()).toEqual('http://localhost/#qux')
  })
})
