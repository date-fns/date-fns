// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setDate from '.'

describe('setDate', function () {
  it('sets the day of the month', function () {
    var result = setDate(new Date(2014, 8 /* Sep */, 1), 30)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30))
  })

  it('accepts a string', function () {
    var result = setDate(new Date(2014, 8 /* Sep */, 1).toISOString(), 18)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 18))
  })

  it('accepts a timestamp', function () {
    var result = setDate(new Date(2014, 8 /* Sep */, 1).getTime(), 25)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 25))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1)
    setDate(date, 20)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })
})
