// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import nextMonday from '.'

describe('nextMonday', function () {
  it('returns the following Monday given the Friday before it', function () {
    const notMonday = new Date(2020, 2 /* Mar */, 20)
    const result = nextMonday(notMonday)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 23))
  })

  it('returns the following Monday given the Thursday before it', function () {
    const notMonday = new Date(2020, 2 /* Mar */, 19)
    const result = nextMonday(notMonday)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 23))
  })

  it('returns the following Monday given the Wednesday before it', function () {
    const notMonday = new Date(2020, 2 /* Mar */, 18)
    const result = nextMonday(notMonday)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 23))
  })

  it('returns the following Monday given the Tuesday before it', function () {
    const notMonday = new Date(2020, 2 /* Mar */, 17)
    const result = nextMonday(notMonday)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 23))
  })

  it('returns the following Monday given the Monday before it', function () {
    const notMonday = new Date(2020, 2 /* Mar */, 16)
    const result = nextMonday(notMonday)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 23))
  })

  it('returns the following Monday given the Sunday before it', function () {
    const notMonday = new Date(2020, 2 /* Mar */, 22)
    const result = nextMonday(notMonday)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 23))
  })

  it('returns the following Monday given the Saturday before it', function () {
    const isSaturday = new Date(2020, 2 /* Mar */, 21)
    const result = nextMonday(isSaturday)
    assert.deepStrictEqual(result, new Date(2020, 2 /* Mar */, 23))
  })

  it('throws `RangeError` if the date is invalid', function () {
    const isSaturday = new Date(NaN)
    const result = nextMonday.bind(null, isSaturday, 7)
    assert.throws(result, RangeError)
  })
})
