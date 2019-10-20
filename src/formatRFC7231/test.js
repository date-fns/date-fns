// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatRFC7231 from '.'

describe('formatRFC7231', () => {
  const sampleDate1 = new Date(2019, 2, 3, 19, 0, 52)
  const sampleDate2 = new Date(2019, 9, 4, 12, 30, 13)
  const sampleDate3 = new Date(2019, 11, 11, 1, 0, 0)

  it('should convert to the extended format', () => {
    assert.deepEqual(
      formatRFC7231(sampleDate1),
      'Wed, 18 Sep 2019 19:00:52 GMT'
    )
    assert.deepEqual(
      formatRFC7231(sampleDate2),
      'Wed, 04 Oct 2019 12:30:13 GMT'
    )
    assert.deepEqual(
      formatRFC7231(sampleDate3),
      'Wed, 11 Dec 2019 01:00:00 GMT'
    )
  })

  it('throws TypeError if no parameters are passed', function() {
    try {
      formatRFC7231()
    } catch (err) {
      assert.deepEqual(err.name, 'TypeError')
      assert.deepEqual(err.message, `1 arguments required, but only 0 present`)
    }
  })

  it('throws RangeError if the date is `Invalid Date`', function() {
    try {
      formatRFC7231(new Date(NaN))
    } catch (err) {
      assert.deepEqual(err.name, 'RangeError')
      assert.deepEqual(err.message, 'Invalid time value')
    }
  })
})
