// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import nextTuesday from '.'

describe('nextTuesday', function() {
  it('returns the following Tuesday given the Friday before it', function() {
    const notTuesday = new Date(2020, 2 /* Mar */, 20)
    var result = nextTuesday(notTuesday)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 24))
  })
  it('returns the following Tuesday given the Thursday before it', function() {
    const notTuesday = new Date(2020, 2 /* Mar */, 19)
    var result = nextTuesday(notTuesday)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 24))
  })
  it('returns the following Tuesday given the Wednesday before it', function() {
    const notTuesday = new Date(2020, 2 /* Mar */, 18)
    var result = nextTuesday(notTuesday)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 24))
  })
  it('returns the following Tuesday given the Tuesday before it', function() {
    const notTuesday = new Date(2020, 2 /* Mar */, 17)
    var result = nextTuesday(notTuesday)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 24))
  })
  it('returns the following Tuesday given the Monday before it', function() {
    const notTuesday = new Date(2020, 2 /* Mar */, 23)
    var result = nextTuesday(notTuesday)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 24))
  })
  it('returns the following Tuesday given the Sunday before it', function() {
    const notTuesday = new Date(2020, 2 /* Mar */, 22)
    var result = nextTuesday(notTuesday)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 24))
  })
  it('returns the following Tuesday given the Saturday before it', function() {
    const isSaturday = new Date(2020, 2 /* Mar */, 21)
    var result = nextTuesday(isSaturday)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 24))
  })
})
