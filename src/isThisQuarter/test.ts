/* eslint-env mocha */

import assert from 'assert'
import sinon from 'sinon'
import isThisQuarter from '.'

describe('isThisQuarter', function () {
  let clock: sinon.SinonFakeTimers
  beforeEach(function () {
    clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25).getTime())
  })

  afterEach(function () {
    clock.restore()
  })

  it('returns true if the given date and the current date have the same quarter (and year)', function () {
    const date = new Date(2014, 6 /* Jul */, 2)
    assert(isThisQuarter(date))
  })

  it('returns false if the given date and the current date have different quarters', function () {
    const date = new Date(2014, 1 /* Feb */, 11)
    assert(!isThisQuarter(date))
  })

  it('accepts a timestamp', function () {
    const date = new Date(2014, 6 /* Jul */, 2).getTime()
    assert(isThisQuarter(date))
  })
})
