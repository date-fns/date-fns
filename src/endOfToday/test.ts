// @flow
/* eslint-env mocha */

// @ts-expect-error ts-migrate(1259) FIXME: Module '"assert"' can only be default-imported usi... Remove this comment to see the full error message
import assert from 'assert'
import sinon from 'sinon'
import endOfToday from '.'

describe('endOfToday', () => {
  let clock
  beforeEach(() => {
    clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime()
    )
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns the current date with the time setted to 23:59:59.999', () => {
    const result = endOfToday()
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 25, 23, 59, 59, 999))
  })
})
