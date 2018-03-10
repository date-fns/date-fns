/* eslint-env mocha */

import assert from 'power-assert'
import tzOffsetMinutes from '.'

describe('tzOffsetMinutes', function () {
  it('Empty time zone', function () {
    assert.equal(tzOffsetMinutes(''), 0)
  })

  it('Z time zone', function () {
    assert.equal(tzOffsetMinutes('Z'), 0)
  })

  it('±hh time zone format', function () {
    assert.equal(tzOffsetMinutes('-04'), 240)
    assert.equal(tzOffsetMinutes('+02'), -120)
  })

  it('±hhmm time zone format', function () {
    assert.equal(tzOffsetMinutes('-0430'), 270)
    assert.equal(tzOffsetMinutes('+0230'), -150)
  })

  it('±hh:mm time zone format', function () {
    assert.equal(tzOffsetMinutes('-05:00'), 300)
    assert.equal(tzOffsetMinutes('+03:00'), -180)
  })

  it('IANA time zone', function () {
    var date = new Date('2014-10-25T13:46:20Z')
    assert.equal(tzOffsetMinutes('America/New_York', date), 240)
    assert.equal(tzOffsetMinutes('Europe/Paris', date), -120)
  })
})
