// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatRFC7231 from '.'

describe('formatRFC7231', () => {
  it('formats RFC-7231 date string', () => {
    const date = new Date(Date.UTC(2019, 2, 3, 19, 0, 52))
    assert(formatRFC7231(date) === 'Sun, 03 Mar 2019 19:00:52 GMT')
  })

  it('accepts a timestamp', () => {
    const date = Date.UTC(2019, 9, 4, 12, 30, 13)
    assert(formatRFC7231(date) === 'Fri, 04 Oct 2019 12:30:13 GMT')
  })

  it('throws RangeError if the time value is invalid', () => {
    assert.throws(formatRFC7231.bind(null, new Date(NaN)), RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(formatRFC7231.bind(null), TypeError)
  })
})
