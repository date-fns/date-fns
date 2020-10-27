// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import nextDay from '.'

describe('next', function() {
  it('returns the date of the next specified day', function() {
    var date = new Date(1976, 2 /* Mar */, 1)
    var result = nextDay(date, 6);
    assert.deepEqual(result, new Date(1976, 2 /* Mar */, 6))
  })

  it('returns the date of the next specified day when day is comes earlier in the week than date', function() {
    var date = new Date(1976, 2 /* Mar */, 4)
    var result = nextDay(date, 1);
    assert.deepEqual(result, new Date(1976, 2 /* Mar */, 8))
  })

  it('returns the date one week from specified date if it is the same day', function() {
    var date = new Date(1976, 2 /* Mar */, 1)
    var result = nextDay(date, 1);
    assert.deepEqual(result, new Date(1976, 2 /* Mar */, 8))
  })

  it('returns the date one week from specified date if day is left out', function() {
    var date = new Date(1976, 2 /* Mar */, 1)
    var result = nextDay(date);
    assert.deepEqual(result, new Date(1976, 2 /* Mar */, 8))
  })
})
