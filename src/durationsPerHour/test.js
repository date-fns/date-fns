// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import durationsPerHour from '.'

describe('durationsPerHour', function () {
  const hour = 1000 * 60 * 60

  it('assigns durations to full hours', function () {
    const start = new Date('2017-11-15T07:33:22.100+0000')
    const end = new Date('2017-11-15T10:43:24.182+0000')

    const result = durationsPerHour(start, end)
    const expected = {
      1510729200000: 1597900,
      1510732800000: hour,
      1510736400000: hour,
      1510740000000: 2604182
    }
    assert.deepEqual(result, expected)
  })

  it('accepts strings', function () {
    const start = '2017-11-15T20:27:01.000+0000'
    const end = '2017-11-15T23:29:01.000+0000'

    const result = durationsPerHour(start, end)
    const expected = {
      1510776000000: 1979000,
      1510779600000: hour,
      1510783200000: hour,
      1510786800000: 1741000
    }
    assert.deepEqual(result, expected)
  })

  it('accepts timestamps', function () {
    const start = new Date('1992-12-31T22:55:07.100+0000').getTime()
    const end = new Date('1993-01-01T01:02:03.182+0000').getTime()

    const result = durationsPerHour(start, end)
    const expected = {
      725839200000: 292900,
      725842800000: hour,
      725846400000: hour,
      725850000000: 123182
    }
    assert.deepEqual(result, expected)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(durationsPerHour.bind(null), TypeError)
    assert.throws(durationsPerHour.bind(null, '2017-11-15T23:27:01.000+0000'), TypeError)
  })

  it('accepts start and end value in same hour', function () {
    const start = new Date('1992-12-31T22:55:07.100+0000').getTime()
    const end = start + 20000

    const result = durationsPerHour(start, end)
    const expected = { 725839200000: 20000 }

    assert.deepEqual(result, expected)
  })

  it('accepts same value for start and end', function () {
    const start = new Date('1992-12-31T22:55:07.100+0000').getTime()

    const result = durationsPerHour(start, start)
    const expected = { 725839200000: 0 }

    assert.deepEqual(result, expected)
  })

  it('throws TypeError exception if end is before start', function () {
    assert.throws(durationsPerHour.bind(null, '2017-11-15T23:27:01.000+0000', '2017-11-15T22:00:01.000+0000'), TypeError)
  })
})
