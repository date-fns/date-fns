// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import subWeeks from '.'

describe('subWeeks', function () {
  it('subtracts the given number of weeks', function () {
    var result = subWeeks(new Date(2014, 8 /* Sep */, 1), 4)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 4))
  })

  it('accepts a string', function () {
    var result = subWeeks(new Date(2014, 8 /* Sep */, 1).toISOString(), 2)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 18))
  })

  it('accepts a timestamp', function () {
    var result = subWeeks(new Date(2014, 8 /* Sep */, 1).getTime(), 1)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 25))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1)
    subWeeks(date, 2)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })
})
