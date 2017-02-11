// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setSeconds from '.'

describe('setSeconds', function () {
  it('sets the seconds', function () {
    var result = setSeconds(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500), 45)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 45, 500))
  })

  it('accepts a string', function () {
    var result = setSeconds(new Date(2014, 8 /* Sep */, 1, 11).toISOString(), 18)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 0, 18))
  })

  it('accepts a timestamp', function () {
    var result = setSeconds(new Date(2014, 8 /* Sep */, 1, 11, 30, 15).getTime(), 45)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 45))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1, 11, 30, 40)
    setSeconds(date, 15)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1, 11, 30, 40))
  })
})
