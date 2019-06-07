// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import assign from '.'

describe('assign', function() {
  it('assigns properties of the second argument to the first argument', function() {
    var object = {}
    assign(object, { a: 1, b: 2, c: 3 })
    assert.deepEqual(object, { a: 1, b: 2, c: 3 })
  })

  it('the object passed as 2nd argument remains unchanged when the result is mutated', function() {
    var object = { a: 1, b: 2, c: 3 }
    var result = assign({}, object)
    result.c = 4
    assert.deepEqual(object, { a: 1, b: 2, c: 3 })
  })

  it('returns the first argument when the second argument is `undefined`', function() {
    var original = { a: 1, b: 2, c: 3 }
    var result = assign(original, undefined)
    assert(original === result)
  })

  it('throws TypeError exception if the first argument is `undefined', function() {
    assert.throws(assign.bind(null, undefined, { a: 1, b: 2, c: 3 }), TypeError)
  })
})
