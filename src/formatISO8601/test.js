// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatISO8601 from '.'

describe('formatISO8601', () => {
  const sampleDate1 = new Date(2019, 2, 3, 19, 0, 52)
  const sampleDate2 = new Date(2019, 9, 4, 12, 30, 13)
  const sampleDate3 = new Date(2019, 11, 11, 1, 0, 0)

  it('should convert to the extended format', () => {
    assert.deepEqual(formatISO8601(sampleDate1), '2019-03-03T19:00:52')
    assert.deepEqual(formatISO8601(sampleDate2), '2019-10-04T12:30:13')
    assert.deepEqual(formatISO8601(sampleDate3), '2019-12-11T01:00:00')
  })

  it('should convert to the short format', () => {
    assert.deepEqual(
      formatISO8601(sampleDate1, { extended: false }),
      '20190303T190052'
    )
    assert.deepEqual(
      formatISO8601(sampleDate2, { extended: false }),
      '20191004T123013'
    )
    assert.deepEqual(
      formatISO8601(sampleDate3, { extended: false }),
      '20191211T010000'
    )
  })

  it('throws TypeError when options.date and options.time are both false', function() {
    try {
      formatISO8601(new Date(), { date: false, time: false })
    } catch (err) {
      assert.deepEqual(err.name, 'TypeError')
      assert.deepEqual(
        err.message,
        'Either options.date or options.time must be true'
      )
    }
  })

  it('throws TypeError if no parameters are passed', function() {
    try {
      formatISO8601()
    } catch (err) {
      assert.deepEqual(err.name, 'TypeError')
      assert.deepEqual(err.message, `1 arguments required, but only 0 present`)
    }
  })

  it('throws RangeError if the date is `Invalid Date`', function() {
    try {
      formatISO8601(new Date(NaN))
    } catch (err) {
      assert.deepEqual(err.name, 'RangeError')
      assert.deepEqual(err.message, 'Invalid time value')
    }
  })
})
