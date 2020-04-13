// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getISODurationString from '.'

describe('getISODurationString', function() {
  it('Everything returns correct duration for arbitrary dates', function() {
    const result = getISODurationString(
      new Date(1929, 0, 15, 12, 0, 0),
      new Date(1968, 3, 4, 19, 5, 0)
    )

    assert(result === 'P39Y2M20DT7H5M0S')
  })
  it('Everything returns P1Y1M1DT1H1M1S (1 of everything)', function() {
    const result = getISODurationString(
      new Date(2020, 2, 1, 12, 0, 0),
      new Date(2021, 3, 2, 13, 1, 1)
    )

    assert(result === 'P1Y1M1DT1H1M1S')
  })
  it('Nothing returns P0Y0M0DT0H0M0S when the dates are the same', function() {
    const result = getISODurationString(
      new Date(2020, 2, 1, 12, 0, 0),
      new Date(2020, 2, 1, 12, 0, 0)
    )

    assert(result === 'P0Y0M0DT0H0M0S')
  })
  it('Seconds returns P0Y0M0DT0H0M1S (1 second)', function() {
    const result = getISODurationString(
      new Date(2020, 2, 1, 12, 0, 0),
      new Date(2020, 2, 1, 12, 0, 1)
    )

    assert(result === 'P0Y0M0DT0H0M1S')
  })
  it('Minutes returns P0Y0M0DT0H1M0S (1 minute)', function() {
    const result = getISODurationString(
      new Date(2020, 2, 1, 12, 0, 0),
      new Date(2020, 2, 1, 12, 1, 0)
    )

    assert(result === 'P0Y0M0DT0H1M0S')
  })
  it('Hours returns P0Y0M0DT1H0M0S (1 hour)', function() {
    const result = getISODurationString(
      new Date(2020, 2, 1, 12, 0, 0),
      new Date(2020, 2, 1, 13, 0, 0)
    )

    assert(result === 'P0Y0M0DT1H0M0S')
  })
  it('Days returns P0Y0M1DT0H0M0S (1 day)', function() {
    const result = getISODurationString(
      new Date(2020, 2, 1, 12, 0, 0),
      new Date(2020, 2, 2, 12, 0, 0)
    )

    assert(result === 'P0Y0M1DT0H0M0S')
  })
  it('Months returns P0Y1M0DT0H0M0S (1 month)', function() {
    const result = getISODurationString(
      new Date(2020, 2, 1, 12, 0, 0),
      new Date(2020, 3, 1, 12, 0, 0)
    )

    assert(result === 'P0Y1M0DT0H0M0S')
  })
  it('Years returns P1Y0M0DT0H0M1S (1 year)', function() {
    const result = getISODurationString(
      new Date(2020, 2, 1, 12, 0, 0),
      new Date(2021, 2, 1, 12, 0, 0)
    )

    assert(result === 'P1Y0M0DT0H0M0S')
  })
})
