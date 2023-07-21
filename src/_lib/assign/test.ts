/* eslint-env mocha */

import assert from 'assert'
import assign from './index'

describe('assign', () => {
  it('assigns properties of the second argument to the first argument', () => {
    const object = {}
    assign(object, { a: 1, b: 2, c: 3 })
    assert.deepStrictEqual(object, { a: 1, b: 2, c: 3 })
  })

  it('the object passed as 2nd argument remains unchanged when the result is mutated', () => {
    const object = { a: 1, b: 2, c: 3 }
    const result = assign({}, object)
    result.c = 4
    assert.deepStrictEqual(object, { a: 1, b: 2, c: 3 })
  })

  it('returns the first argument when the second argument is `undefined`', () => {
    const original = { a: 1, b: 2, c: 3 }
    const result = assign(original, undefined)
    assert(original === result)
  })

  it('throws TypeError exception if the first argument is `undefined', () => {
    assert.throws(assign.bind(null, undefined, { a: 1, b: 2, c: 3 }), TypeError)
  })
})
