// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setHours from '.'

describe('setHours', function () {
  it('sets the amount of hours', function () {
    var result = setHours(new Date(2014, 8 /* Sep */, 1, 11, 30), 4)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 4, 30))
  })

  it('accepts a string', function () {
    var result = setHours(new Date(2014, 8 /* Sep */, 1, 11).toISOString(), 18)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 18))
  })

  it('accepts a timestamp', function () {
    var result = setHours(new Date(2014, 8 /* Sep */, 1, 11).getTime(), 5)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 5))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1, 11)
    setHours(date, 12)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1, 11))
  })
})
