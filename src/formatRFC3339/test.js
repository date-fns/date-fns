// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatRFC3339 from '.'

describe('formatRFC3339', () => {
  const dt = new Date()
  const tzOffset = dt.getTimezoneOffset()

  // Force normalize the date so it will work fine in other timezones.
  const sampleDate1 = addMinutes(new Date(2019, 2, 3, 19, 0, 52), tzOffset)
  const sampleDate2 = addMinutes(new Date(2019, 9, 4, 12, 30, 13), tzOffset)
  const sampleDate3 = addMinutes(new Date(2019, 11, 11, 1, 0, 0), tzOffset)

  it('should convert to the extended format', () => {
    assert.deepEqual(formatRFC3339(sampleDate1), '2019-03-03T19:00:52Z')
    assert.deepEqual(formatRFC3339(sampleDate2), '2019-10-04T12:30:13Z')
    assert.deepEqual(formatRFC3339(sampleDate3), '2019-12-11T01:00:00Z')
  })

  it('throws TypeError when options.fraction is not within range of 0 and 3', function() {
    const block = formatRFC3339.bind(null, new Date(), {
      fraction: 4
    })

    assert.throws(block, TypeError)
    assert.throws(block, 'Fraction should be within the range of 0 and 3')
  })

  it('throws TypeError if no parameters are passed', function() {
    const block = formatRFC3339.bind(null)

    assert.throws(block, TypeError)
    assert.throws(block, '1 arguments required, but only 0 present')
  })

  it('throws RangeError if the date is `Invalid Date`', function() {
    const block = formatRFC3339.bind(null, new Date(NaN))

    assert.throws(block, RangeError)
    assert.throws(block, 'Invalid time value')
  })
})
