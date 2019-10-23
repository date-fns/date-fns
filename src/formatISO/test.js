// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatISO from '.'

describe('formatISO', () => {
  const sampleDate1 = new Date(2019, 2, 3, 19, 0, 52)
  const sampleDate2 = new Date(2019, 9, 4, 12, 30, 13)
  const sampleDate3 = new Date(2019, 11, 11, 1, 0, 0)

  it('should convert to the extended format', () => {
    assert.deepEqual(formatISO(sampleDate1), '2019-03-03T19:00:52')
    assert.deepEqual(formatISO(sampleDate2), '2019-10-04T12:30:13')
    assert.deepEqual(formatISO(sampleDate3), '2019-12-11T01:00:00')
  })

  it('should convert to the short format', () => {
    assert.deepEqual(
      formatISO(sampleDate1, { extended: false }),
      '20190303T190052'
    )
    assert.deepEqual(
      formatISO(sampleDate2, { extended: false }),
      '20191004T123013'
    )
    assert.deepEqual(
      formatISO(sampleDate3, { extended: false }),
      '20191211T010000'
    )
  })

  it('should show date only when options.time is false', () => {
    assert.deepEqual(formatISO(sampleDate1, { time: false }), '2019-03-03')
    assert.deepEqual(formatISO(sampleDate2, { time: false }), '2019-10-04')
    assert.deepEqual(formatISO(sampleDate3, { time: false }), '2019-12-11')
  })

  it('should show time only when options.date is false', () => {
    assert.deepEqual(formatISO(sampleDate1, { date: false }), '19:00:52')
    assert.deepEqual(formatISO(sampleDate2, { date: false }), '12:30:13')
    assert.deepEqual(formatISO(sampleDate3, { date: false }), '01:00:00')
  })

  it('throws TypeError when options.date and options.time are both false', function() {
    const block = formatISO.bind(null, new Date(), {
      date: false,
      time: false
    })

    assert.throws(block, TypeError)
    assert.throws(block, /Either options.date or options.time must be true/)
  })

  it('throws TypeError if no parameters are passed', function() {
    const block = formatISO.bind(null)

    assert.throws(block, TypeError)
    assert.throws(block, /1 arguments required, but only 0 present/)
  })

  it('throws RangeError if the date is `Invalid Date`', function() {
    const block = formatISO.bind(null, new Date(NaN))

    assert.throws(block, RangeError)
    assert.throws(block, /Invalid time value/)
  })
})
