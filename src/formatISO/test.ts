// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatISO from '.'
import addLeadingZeros from '../_lib/addLeadingZeros'

// This makes sure we create the consistent offsets across timezones, no matter where these tests are ran.
function generateOffset(originalDate) {
  // Add the timezone.
  let offset = ''
  const tzOffset = originalDate.getTimezoneOffset()

  if (tzOffset !== 0) {
    const absoluteOffset = Math.abs(tzOffset)
    const hourOffset = addLeadingZeros(Math.floor(absoluteOffset / 60), 2)
    const minuteOffset = addLeadingZeros(absoluteOffset % 60, 2)
    // If less than 0, the sign is +, because it is ahead of time.
    const sign = tzOffset < 0 ? '+' : '-'

    offset = `${sign}${hourOffset}:${minuteOffset}`
  } else {
    offset = 'Z'
  }

  return offset
}

describe('formatISO', () => {
  it('formats ISO-8601 extended format', () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123)
    const tzOffsetExtended = generateOffset(date)
    assert(formatISO(date) === `2019-03-03T19:00:52${tzOffsetExtended}`)
  })

  it('accepts a timestamp', () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123).getTime()
    const tzOffsetExtended = generateOffset(new Date(date))
    assert(formatISO(date) === `2019-03-03T19:00:52${tzOffsetExtended}`)
  })

  it('formats ISO-8601 basic format', () => {
    const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456)
    const tzOffsetBasic = generateOffset(date)
    assert(
      formatISO(date, { format: 'basic' }) === `20191004T123013${tzOffsetBasic}`
    )
  })

  it('formats only date', () => {
    const date = new Date(2019, 11 /* Dec */, 11, 1, 0, 0, 789)

    assert(
      formatISO(date, { representation: 'date', format: 'extended' }) ===
        '2019-12-11'
    )
    assert(
      formatISO(date, { representation: 'date', format: 'basic' }) ===
        '20191211'
    )
  })

  it('formats only time', () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123)
    const tzOffset = generateOffset(date)

    assert(
      formatISO(date, { representation: 'time', format: 'extended' }) ===
        `19:00:52${tzOffset}`
    )
    assert(
      formatISO(date, { representation: 'time', format: 'basic' }) ===
        `190052${tzOffset}`
    )
  })

  describe('implicitly converts options', function() {
    it('`format`', function() {
      // eslint-disable-next-line no-new-wrappers
      var format = new String('basic')
      var date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456)
      const tzOffsetExtended = generateOffset(date)
      // $ExpectedMistake
      var result = formatISO(date, { format: format })
      assert(result === `20191004T123013${tzOffsetExtended}`)
    })

    it('`representation`', function() {
      // eslint-disable-next-line no-new-wrappers
      var representation = new String('time')
      var date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456)
      const tzOffsetExtended = generateOffset(date)
      // $ExpectedMistake
      var result = formatISO(date, { representation: representation })
      assert(result === `12:30:13${tzOffsetExtended}`)
    })
  })

  it("throws `RangeError` if `options.format` is not 'extended' or 'basic'", function() {
    // $ExpectedMistake
    var block = formatISO.bind(null, new Date(2019, 2 /* Mar */, 3), {
      format: 'something else'
    })
    assert.throws(block, RangeError)
  })

  it("throws `RangeError` if `options.representation` is not 'date', 'time' or 'complete'", function() {
    // $ExpectedMistake
    var block = formatISO.bind(null, new Date(2019, 2 /* Mar */, 3), {
      representation: 'something else'
    })
    assert.throws(block, RangeError)
  })

  it('throws RangeError if the time value is invalid', () => {
    assert.throws(formatISO.bind(null, new Date(NaN)), RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(formatISO.bind(null), TypeError)
  })
})
