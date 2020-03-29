// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import sinon from 'sinon'
import startOfToday from '.'

describe('startOfToday', function() {
  let clock
  beforeEach(function() {
    clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime()
    )
  })

  afterEach(function() {
    clock.restore()
  })

  it('returns the current date with the time setted to 00:00:00', function() {
    var result = startOfToday()
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 25))
  })
})
