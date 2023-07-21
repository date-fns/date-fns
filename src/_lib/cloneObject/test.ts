/* eslint-env mocha */

import assert from 'assert'
import cloneObject from './index'

describe('cloneObject', () => {
  it('makes a copy of an object', () => {
    const result = cloneObject({ a: 1, b: 2, c: 3 })
    assert.deepStrictEqual(result, { a: 1, b: 2, c: 3 })
  })

  it('the copy remains unchanged when the original is changed', () => {
    const original = { a: 1, b: 2, c: 3 }
    const copy = cloneObject(original)
    original.c = 4
    assert.deepStrictEqual(copy, { a: 1, b: 2, c: 3 })
  })

  it('the original remains unchanged when the copy is changed', () => {
    const original = { a: 1, b: 2, c: 3 }
    const copy = cloneObject(original)
    copy.c = 4
    assert.deepStrictEqual(original, { a: 1, b: 2, c: 3 })
  })

  it('returns an empty object when argument is `undefined`', () => {
    const result = cloneObject(undefined)
    assert.deepStrictEqual(result, {})
  })
})
