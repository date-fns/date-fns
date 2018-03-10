/* eslint-env mocha */

import assert from 'power-assert'
import tzMakeDateTimeFormat from '.'

describe('tzMakeDateTimeFormat', function () {
  it('creates a cached Intl.DateTimeFormat', function () {
    var dtfBangkok = tzMakeDateTimeFormat('Asia/Bangkok')
    assert(dtfBangkok instanceof Intl.DateTimeFormat)
    var dtfBangkok2 = tzMakeDateTimeFormat('Asia/Bangkok')
    assert(dtfBangkok === dtfBangkok2)
    var dtfLondon = tzMakeDateTimeFormat('Europe/London')
    assert(dtfBangkok !== dtfLondon)
  })

  it('formats a date to the en-US locale', function () {
    var dtfParis = tzMakeDateTimeFormat('Europe/Paris')
    var result = dtfParis.format(new Date('2014-10-25T13:46:20Z'))
    assert.equal(result, '10/25/2014, 15:46:20 GMT+2')
  })

  it('formats a date to other locales (mainly for the short time zone name)', function () {
    var dtfParis = tzMakeDateTimeFormat('Europe/Paris', {code: 'en-GB'})
    var result = dtfParis.format(new Date('2014-10-25T13:46:20Z'))
    assert.equal(result, '25/10/2014, 15:46:20 CEST')
  })
})
