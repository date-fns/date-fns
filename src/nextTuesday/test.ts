// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import nextTuesday from '.'

describe('nextTuesday', function () {
  it('returns the following Tuesday given the Friday before it', function () {
    const notTuesday = new Date(2020, 2 /* Mar */, 20)
    const result = nextTuesday(notTuesday)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 24))
  })

  it('returns the following Tuesday given the Thursday before it', function () {
    const notTuesday = new Date(2020, 2 /* Mar */, 19)
    const result = nextTuesday(notTuesday)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 24))
  })

  it('returns the following Tuesday given the Wednesday before it', function () {
    const notTuesday = new Date(2020, 2 /* Mar */, 18)
    const result = nextTuesday(notTuesday)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 24))
  })

  it('returns the following Tuesday given the Tuesday before it', function () {
    const notTuesday = new Date(2020, 2 /* Mar */, 17)
    const result = nextTuesday(notTuesday)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 24))
  })

  it('returns the following Tuesday given the Monday before it', function () {
    const notTuesday = new Date(2020, 2 /* Mar */, 23)
    const result = nextTuesday(notTuesday)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 24))
  })

  it('returns the following Tuesday given the Sunday before it', function () {
    const notTuesday = new Date(2020, 2 /* Mar */, 22)
    const result = nextTuesday(notTuesday)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 24))
  })

  it('returns the following Tuesday given the Saturday before it', function () {
    const isSaturday = new Date(2020, 2 /* Mar */, 21)
    const result = nextTuesday(isSaturday)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 24))
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    const result = nextTuesday(new Date(NaN))
    assert(result instanceof Date)
  })
})
