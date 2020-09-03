// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import cloneObject from '.'

describe('cloneObject', function () {
  it('makes a copy of an object', function () {
    var result = cloneObject({a: 1, b: 2, c: 3})
    assert.deepEqual(result, {a: 1, b: 2, c: 3})
  })

  it('the copy remains unchanged when the original is changed', function () {
    var original = {a: 1, b: 2, c: 3}
    var copy = cloneObject(original)
    original.c = 4
    assert.deepEqual(copy, {a: 1, b: 2, c: 3})
  })

  it('the original remains unchanged when the copy is changed', function () {
    var original = {a: 1, b: 2, c: 3}
    var copy = cloneObject(original)
    copy.c = 4
    assert.deepEqual(original, {a: 1, b: 2, c: 3})
  })

  it('returns an empty object when argument is `undefined`', function () {
    var result = cloneObject(undefined)
    assert.deepEqual(result, {})
  })
})
