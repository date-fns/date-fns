// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var max = require('./')

describe('max', function () {
  it('returns the latest date', function () {
    var result = max(
      [
        new Date(1989, 6 /* Jul */, 10),
        new Date(1987, 1 /* Feb */, 11)
      ]
    )
    assert.deepEqual(result, new Date(1989, 6 /* Jul */, 10))
  })

  it('allows to pass more than 2 arguments', function () {
    var result = max(
      [
        new Date(1987, 1 /* Feb */, 11),
        new Date(1989, 6 /* Jul */, 10),
        new Date(1995, 6 /* Jul */, 2),
        new Date(1990, 0 /* Jan */, 1)
      ]
    )
    assert.deepEqual(result, new Date(1995, 6 /* Jul */, 2))
  })

  it('accepts strings', function () {
    var result = max(
      [
        new Date(1987, 1 /* Feb */, 11).toISOString(),
        new Date(1989, 6 /* Jul */, 10).toISOString()
      ]
    )
    assert.deepEqual(result, new Date(1989, 6 /* Jul */, 10))
  })

  it('accepts timestamps', function () {
    var result = max(
      [
        new Date(1989, 6 /* Jul */, 10).getTime(),
        new Date(1987, 1 /* Feb */, 11).getTime()
      ]
    )
    assert.deepEqual(result, new Date(1989, 6 /* Jul */, 10))
  })
})
