// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatConstants from '.'

describe('formatConstants', () => {
  const sampleDate1 = new Date(2019, 2, 3, 19, 0, 52)
  const sampleDate2 = new Date(2019, 9, 4, 12, 30, 13)
  const sampleDate3 = new Date(2019, 11, 11, 1, 0, 0)

  describe('RFC_7231', () => {
    it('should convert to datetime', () => {
      assert.deepEqual(
        formatConstants(sampleDate1, 'RFC_7231'),
        'Sun, 03 Mar 2019 19:00:52 GMT'
      )
      assert.deepEqual(
        formatConstants(sampleDate2, 'RFC_7231'),
        'Fri, 04 Oct 2019 12:30:13 GMT'
      )
      assert.deepEqual(
        formatConstants(sampleDate3, 'RFC_7231'),
        'Wed, 11 Dec 2019 01:00:00 GMT'
      )
    })

    it('should convert to date', () => {
      assert.deepEqual(
        formatConstants(sampleDate1, 'RFC_7231_DATE'),
        'Sun, 03 Mar 2019'
      )
      assert.deepEqual(
        formatConstants(sampleDate2, 'RFC_7231_DATE'),
        'Fri, 04 Oct 2019'
      )
      assert.deepEqual(
        formatConstants(sampleDate3, 'RFC_7231_DATE'),
        'Wed, 11 Dec 2019'
      )
    })

    it('should convert to time', () => {
      assert.deepEqual(
        formatConstants(sampleDate1, 'RFC_7231_TIME'),
        '19:00:52 GMT'
      )
      assert.deepEqual(
        formatConstants(sampleDate2, 'RFC_7231_TIME'),
        '12:30:13 GMT'
      )
      assert.deepEqual(
        formatConstants(sampleDate3, 'RFC_7231_TIME'),
        '01:00:00 GMT'
      )
    })
  })

  describe('ISO_8601', () => {
    it('should convert to the extended format', () => {
      assert.deepEqual(
        formatConstants(sampleDate1, 'ISO_8601'),
        '2019-03-03T19:00:52'
      )
      assert.deepEqual(
        formatConstants(sampleDate2, 'ISO_8601'),
        '2019-10-04T12:30:13'
      )
      assert.deepEqual(
        formatConstants(sampleDate3, 'ISO_8601'),
        '2019-12-11T01:00:00'
      )
    })

    it('should convert to the short format', () => {
      assert.deepEqual(
        formatConstants(sampleDate1, 'ISO_8601_SHORT'),
        '20190303T190052'
      )
      assert.deepEqual(
        formatConstants(sampleDate2, 'ISO_8601_SHORT'),
        '20191004T123013'
      )
      assert.deepEqual(
        formatConstants(sampleDate3, 'ISO_8601_SHORT'),
        '20191211T010000'
      )
    })
  })

  describe('ISO_9075', () => {
    it('should convert to datetime', () => {
      assert.deepEqual(
        formatConstants(sampleDate1, 'ISO_9075'),
        '2019-03-03 19:00:52'
      )
      assert.deepEqual(
        formatConstants(sampleDate2, 'ISO_9075'),
        '2019-10-04 12:30:13'
      )
      assert.deepEqual(
        formatConstants(sampleDate3, 'ISO_9075'),
        '2019-12-11 01:00:00'
      )
    })

    it('should convert to date', () => {
      assert.deepEqual(
        formatConstants(sampleDate1, 'ISO_9075_DATE'),
        '2019-03-03'
      )
      assert.deepEqual(
        formatConstants(sampleDate2, 'ISO_9075_DATE'),
        '2019-10-04'
      )
      assert.deepEqual(
        formatConstants(sampleDate3, 'ISO_9075_DATE'),
        '2019-12-11'
      )
    })

    it('should convert to time', () => {
      assert.deepEqual(
        formatConstants(sampleDate1, 'ISO_9075_TIME'),
        '19:00:52'
      )
      assert.deepEqual(
        formatConstants(sampleDate2, 'ISO_9075_TIME'),
        '12:30:13'
      )
      assert.deepEqual(
        formatConstants(sampleDate3, 'ISO_9075_TIME'),
        '01:00:00'
      )
    })
  })

  it('throws throws TypeError when calling with unsupported formats', function() {
    assert.throws(formatConstants.bind(null, new Date(), 'ISO_8600'), TypeError)
    assert.throws(formatConstants.bind(null, new Date(), 'RFC_7230'), TypeError)
    assert.throws(formatConstants.bind(null, new Date(), 'RFC_9071'), TypeError)
  })

  it('throws RangeError if the date is `Invalid Date`', function() {
    assert.throws(
      formatConstants.bind(null, new Date(NaN), 'ISO_8601'),
      RangeError
    )
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(formatConstants.bind(null), TypeError)
    assert.throws(formatConstants.bind(null, 1), TypeError)
  })
})
