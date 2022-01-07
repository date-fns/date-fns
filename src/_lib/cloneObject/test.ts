/* eslint-env mocha */

import assert from 'assert'
import cloneObject from '.'

describe('cloneObject', () => {
  it('makes a copy of an object', () => {
    var result = cloneObject({ a: 1, b: 2, c: 3 })
    assert.deepEqual(result, { a: 1, b: 2, c: 3 })
  })

  it('the copy remains unchanged when the original is changed', () => {
    var original = { a: 1, b: 2, c: 3 }
    var copy = cloneObject(original)
    original.c = 4
    assert.deepEqual(copy, { a: 1, b: 2, c: 3 })
  })

  it('the original remains unchanged when the copy is changed', () => {
    var original = { a: 1, b: 2, c: 3 }
    var copy = cloneObject(original)
    copy.c = 4
    assert.deepEqual(original, { a: 1, b: 2, c: 3 })
  })

  it('returns an empty object when argument is `undefined`', () => {
    var result = cloneObject(undefined)
    assert.deepEqual(result, {})
  })
})
