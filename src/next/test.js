// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import next from '.'

describe('next', function() {
  it('returns the date of the next specified day', function() {
    var date = new Date(1976, 2 /* Mar */, 1)
    var result = next(6, date);
    assert.deepEqual(result, new Date(1976, 2 /* Mar */, 6))
  })

  it('returns the date of the next specified day when day is comes earlier in the week than date', function() {
    var date = new Date(1976, 2 /* Mar */, 4)
    var result = next(1, date);
    assert.deepEqual(result, new Date(1976, 2 /* Mar */, 8))
  })

  it('returns the date one week from specified date if it is the same day', function() {
    var date = new Date(1976, 2 /* Mar */, 1)
    var result = next(1, date);
    assert.deepEqual(result, new Date(1976, 2 /* Mar */, 8))
  })
})
