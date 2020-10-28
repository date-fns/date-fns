// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import nextMonday from '.'

describe('nextMonday', function() {
  it('returns the following Monday given the Friday before it', function() {
    const notMonday = new Date(2020, 2 /* Mar */, 20)
    var result = nextMonday(notMonday)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 23))
  })
  it('returns the following Monday given the Thursday before it', function() {
    const notMonday = new Date(2020, 2 /* Mar */, 19)
    var result = nextMonday(notMonday)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 23))
  })
  it('returns the following Monday given the Wednesday before it', function() {
    const notMonday = new Date(2020, 2 /* Mar */, 18)
    var result = nextMonday(notMonday)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 23))
  })
  it('returns the following Monday given the Tuesday before it', function() {
    const notMonday = new Date(2020, 2 /* Mar */, 17)
    var result = nextMonday(notMonday)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 23))
  })
  it('returns the following Monday given the Monday before it', function() {
    const notMonday = new Date(2020, 2 /* Mar */, 16)
    var result = nextMonday(notMonday)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 23))
  })
  it('returns the following Monday given the Sunday before it', function() {
    const notMonday = new Date(2020, 2 /* Mar */, 22)
    var result = nextMonday(notMonday)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 23))
  })
  it('returns the following Monday given the Saturday before it', function() {
    const isSaturday = new Date(2020, 2 /* Mar */, 21)
    var result = nextMonday(isSaturday)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 23))
  })
})
