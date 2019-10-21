// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatRFC3339 from '.'
import addLeadingZeros from '../_lib/addLeadingZeros/index.js'

// This makes sure we create the consistent offsets across timezones, no matter where these tests are ran.
function generateOffset(date) {
  let offset = ''
  const tzOffset = date.getTimezoneOffset()

  if (tzOffset !== 0) {
    const absoluteOffset = Math.abs(tzOffset)
    const hourOffset = addLeadingZeros(absoluteOffset / 60, 2)
    const minuteOffset = addLeadingZeros(absoluteOffset % 60, 2)
    // If less than 0, the sign is +, because it is ahead of time.
    const sign = tzOffset < 0 ? '+' : '-'

    offset = `${sign}${hourOffset}${minuteOffset}`
  } else {
    offset = 'Z'
  }

  return offset
}

describe('formatRFC3339', () => {
  const sampleDate1 = new Date(2019, 2, 3, 19, 0, 52)
  const sampleDate2 = new Date(2019, 9, 4, 12, 30, 13)
  const sampleDate3 = new Date(2019, 11, 11, 1, 0, 0)

  it('should convert to RFC 3339 format', () => {
    assert.deepEqual(
      formatRFC3339(sampleDate1),
      `2019-03-03T19:00:52${generateOffset(sampleDate1)}`
    )
    assert.deepEqual(
      formatRFC3339(sampleDate2),
      `2019-10-04T12:30:13${generateOffset(sampleDate2)}`
    )
    assert.deepEqual(
      formatRFC3339(sampleDate3),
      `2019-12-11T01:00:00${generateOffset(sampleDate3)}`
    )
  })

  it('throws TypeError when options.fraction is not within range of 0 and 3', function() {
    const block = formatRFC3339.bind(null, new Date(), {
      fraction: 4
    })

    assert.throws(block, TypeError)
    assert.throws(block, /Fraction should be within the range of 0 and 3/)
  })

  it('throws TypeError if no parameters are passed', function() {
    const block = formatRFC3339.bind(null)

    assert.throws(block, TypeError)
    assert.throws(block, /1 arguments required, but only 0 present/)
  })

  it('throws RangeError if the date is `Invalid Date`', function() {
    const block = formatRFC3339.bind(null, new Date(NaN))

    assert.throws(block, RangeError)
    assert.throws(block, /Invalid time value/)
  })
})
