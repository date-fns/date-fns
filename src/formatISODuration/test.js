// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatISODuration from '.'
import intervalToDuration from '../intervalToDuration'

describe('formatISODuration', function() {
  it('Everything returns correct duration for arbitrary dates', function() {
    const start = new Date(1929, 0, 15, 12, 0, 0)
    const end = new Date(1968, 3, 4, 19, 5, 0)
    const result = formatISODuration(intervalToDuration({ start, end }))

    assert(result === 'P39Y2M20DT7H5M0S')
  })
  it('Everything returns P1Y1M1DT1H1M1S (1 of everything)', function() {
    const start = new Date(2020, 2, 1, 12, 0, 0)
    const end = new Date(2021, 3, 2, 13, 1, 1)
    const result = formatISODuration(intervalToDuration({ start, end }))

    assert(result === 'P1Y1M1DT1H1M1S')
  })
  it('Returns P0Y0M0DT0H0M0S when the dates are the same', function() {
    const start = new Date(2020, 2, 1, 12, 0, 0)
    const end = new Date(2020, 2, 1, 12, 0, 0)
    const result = formatISODuration(intervalToDuration({ start, end }))

    assert(result === 'P0Y0M0DT0H0M0S')
  })
  it('Seconds returns P0Y0M0DT0H0M1S (1 second)', function() {
    const start = new Date(2020, 2, 1, 12, 0, 0)
    const end = new Date(2020, 2, 1, 12, 0, 1)
    const result = formatISODuration(intervalToDuration({ start, end }))

    assert(result === 'P0Y0M0DT0H0M1S')
  })
  it('Minutes returns P0Y0M0DT0H1M0S (1 minute)', function() {
    const start = new Date(2020, 2, 1, 12, 0, 0)
    const end = new Date(2020, 2, 1, 12, 1, 0)
    const result = formatISODuration(intervalToDuration({ start, end }))

    assert(result === 'P0Y0M0DT0H1M0S')
  })
  it('Hours returns P0Y0M0DT1H0M0S (1 hour)', function() {
    const start = new Date(2020, 2, 1, 12, 0, 0)
    const end = new Date(2020, 2, 1, 13, 0, 0)
    const result = formatISODuration(intervalToDuration({ start, end }))

    assert(result === 'P0Y0M0DT1H0M0S')
  })
  it('Days returns P0Y0M1DT0H0M0S (1 day)', function() {
    const start = new Date(2020, 2, 1, 12, 0, 0)
    const end = new Date(2020, 2, 2, 12, 0, 0)
    const result = formatISODuration(intervalToDuration({ start, end }))

    assert(result === 'P0Y0M1DT0H0M0S')
  })
  it('Months returns P0Y1M0DT0H0M0S (1 month)', function() {
    const start = new Date(2020, 2, 1, 12, 0, 0)
    const end = new Date(2020, 3, 1, 12, 0, 0)
    const result = formatISODuration(intervalToDuration({ start, end }))

    assert(result === 'P0Y1M0DT0H0M0S')
  })
  it('Years returns P1Y0M0DT0H0M1S (1 year)', function() {
    const start = new Date(2020, 2, 1, 12, 0, 0)
    const end = new Date(2021, 2, 1, 12, 0, 0)
    const result = formatISODuration(intervalToDuration({ start, end }))

    assert(result === 'P1Y0M0DT0H0M0S')
  })

  it('returns P0Y0M0DT0H0M0S when given an empty object', function() {
    const result = formatISODuration({})

    assert(result === 'P0Y0M0DT0H0M0S')
  })
})
