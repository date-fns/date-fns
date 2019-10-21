// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatRFC7231 from '.'
import addMinutes from '../addMinutes/index.js'

describe('formatRFC7231', () => {
  let sampleDate1 = new Date(2019, 2, 3, 19, 0, 52)
  let sampleDate2 = new Date(2019, 9, 4, 12, 30, 13)
  let sampleDate3 = new Date(2019, 11, 11, 1, 0, 0)

  // Force normalize the date so it will work fine in other timezones.
  sampleDate1 = addMinutes(sampleDate1, sampleDate1.getTimezoneOffset() * -1)
  sampleDate2 = addMinutes(sampleDate2, sampleDate2.getTimezoneOffset() * -1)
  sampleDate3 = addMinutes(sampleDate3, sampleDate3.getTimezoneOffset() * -1)

  it('should convert to the RFC 7231 format', () => {
    assert.deepEqual(
      formatRFC7231(sampleDate1),
      'Sun, 03 Mar 2019 19:00:52 GMT'
    )
    assert.deepEqual(
      formatRFC7231(sampleDate2),
      'Fri, 04 Oct 2019 12:30:13 GMT'
    )
    assert.deepEqual(
      formatRFC7231(sampleDate3),
      'Wed, 11 Dec 2019 01:00:00 GMT'
    )
  })

  it('throws TypeError if no parameters are passed', function() {
    const block = formatRFC7231.bind(null)

    assert.throws(block, TypeError)
    assert.throws(block, '1 arguments required, but only 0 present')
  })

  it('throws RangeError if the date is `Invalid Date`', function() {
    const block = formatRFC7231.bind(null, new Date(NaN))

    assert.throws(block, RangeError)
    assert.throws(block, 'Invalid time value')
  })
})
