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

    offset = `${sign}${hourOffset}:${minuteOffset}`
  } else {
    offset = 'Z'
  }

  return offset
}

describe('formatRFC3339', () => {
  it('formats RFC-3339 date string', () => {
    var date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123)
    assert(formatRFC3339(date) === `2019-03-03T19:00:52${generateOffset(date)}`)
  })

  it('accepts a timestamp', function() {
    var date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456)
    var time = date.getTime()
    assert(formatRFC3339(time) === `2019-10-04T12:30:13${generateOffset(date)}`)
  })

  it('allows to specify digits of second fractions', function() {
    var date = new Date(2019, 11 /* Dec */, 11, 1, 0, 0, 789)
    assert(
      formatRFC3339(date, { fractionDigits: 3 }) ===
        `2019-12-11T01:00:00.789${generateOffset(date)}`
    )
  })

  it('works when ms < 100', function() {
    var date = new Date(2019, 11 /* Dec */, 11, 1, 0, 0, 12)
    assert(
      formatRFC3339(date, { fractionDigits: 2 }) ===
        `2019-12-11T01:00:00.01${generateOffset(date)}`
    )
  })

  it('implicitly converts options', function() {
    var date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123)
    // $ExpectedMistake
    var result = formatRFC3339(date, {
      fractionDigits: '2'
    })
    assert.equal(result, `2019-03-03T19:00:52.12${generateOffset(date)}`)
  })

  it('throws `RangeError` if `options.fractionDigits` is not convertable to 0, 1, 2, 3 or undefined', function() {
    // $ExpectedMistake
    var block = formatRFC3339.bind(null, new Date(2019, 2 /* Mar */, 3), {
      fractionDigits: NaN
    })
    assert.throws(block, RangeError)
  })

  it('throws RangeError if the time value is invalid', () => {
    assert.throws(formatRFC3339.bind(null, new Date(NaN)), RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(formatRFC3339.bind(null), TypeError)
  })
})
