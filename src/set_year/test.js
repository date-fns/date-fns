// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setYear from '.'

describe('setYear', function () {
  it('sets the year', function () {
    var result = setYear(new Date(2014, 8 /* Sep */, 1), 2013)
    assert.deepEqual(result, new Date(2013, 8 /* Sep */, 1))
  })

  it('accepts a string', function () {
    var result = setYear(new Date(2014, 8 /* Sep */, 1).toISOString(), 2016)
    assert.deepEqual(result, new Date(2016, 8 /* Sep */, 1))
  })

  it('accepts a timestamp', function () {
    var result = setYear(new Date(2014, 8 /* Sep */, 1).getTime(), 2016)
    assert.deepEqual(result, new Date(2016, 8 /* Sep */, 1))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1)
    setYear(date, 2011)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })
})
