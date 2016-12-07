// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setDayOfYear from '.'

describe('setDayOfYear', function () {
  it('sets the day of the year', function () {
    var result = setDayOfYear(new Date(2014, 6 /* Jul */, 2), 2)
    assert.deepEqual(result, new Date(2014, 0 /* Jan */, 2))
  })

  it('accepts a string', function () {
    var result = setDayOfYear(new Date(2014, 6 /* Jul */, 2).toISOString(), 60)
    assert.deepEqual(result, new Date(2014, 2 /* Mar */, 1))
  })

  it('accepts a timestamp', function () {
    var result = setDayOfYear(new Date(2014, 6 /* Jul */, 2).getTime(), 60)
    assert.deepEqual(result, new Date(2014, 2 /* Mar */, 1))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 6 /* Jul */, 2)
    setDayOfYear(date, 365)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 2))
  })
})
