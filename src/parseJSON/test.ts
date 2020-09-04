// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import parseJSON from '.'

describe('parseJSON', function() {
  it('parses a fully formed ISO date with Z', () => {
    const date = '2000-03-15T05:20:10.123Z'
    const parsedDate = parseJSON(date)
    assert.equal(parsedDate.toISOString(), date)
  })

  it('parses a fully formed ISO date with Z without ms', () => {
    const date = '2000-03-15T05:20:10Z'
    const expectedDate = '2000-03-15T05:20:10.000Z'
    const parsedDate = parseJSON(date)
    assert.equal(parsedDate.toISOString(), expectedDate)
  })

  it('parses a fully formed ISO date with zero offset', () => {
    const zeroOffset = '2000-03-15T05:20:10+00:00'
    const expectedDate = '2000-03-15T05:20:10.000Z'
    const parsedDate = parseJSON(zeroOffset)
    assert.equal(parsedDate.toISOString(), expectedDate)
  })

  it('parses a fully formed ISO date with zero offset without colon', () => {
    const zeroOffset = '2000-03-15T05:20:10+0000'
    const expectedDate = '2000-03-15T05:20:10.000Z'
    const parsedDate = parseJSON(zeroOffset)
    assert.equal(parsedDate.toISOString(), expectedDate)
  })

  it('parses a fully formed ISO date without Z', () => {
    const date = '2000-03-15T05:20:10.123'
    const expectedDate = '2000-03-15T05:20:10.123Z'
    const parsedDate = parseJSON(date)
    assert.equal(parsedDate.toISOString(), expectedDate)
  })

  it('parses a fully formed ISO date without Z and with 6-digit millisecond part', () => {
    const date = '2000-03-15T05:20:10.123456'
    const expectedDate = '2000-03-15T05:20:10.123Z'
    const parsedDate = parseJSON(date)
    assert.equal(parsedDate.toISOString(), expectedDate)
  })

  it('parses a fully formed ISO with 1-digit millisecond part', () => {
    const date = '2000-03-15T05:20:10.1Z'
    const expectedDate = '2000-03-15T05:20:10.100Z'
    const parsedDate = parseJSON(date)
    assert.equal(parsedDate.toISOString(), expectedDate)
  })

  it('parses a fully formed ISO with 2-digit millisecond part', () => {
    const date = '2000-03-15T05:20:10.12Z'
    const expectedDate = '2000-03-15T05:20:10.120Z'
    const parsedDate = parseJSON(date)
    assert.equal(parsedDate.toISOString(), expectedDate)
  })

  it('parses supported formats with a space time separator instead of a T', () => {
    const date = '2000-03-15 05:20:10.123Z'
    const expectedDate = '2000-03-15T05:20:10.123Z'
    const parsedDate = parseJSON(date)
    assert.equal(parsedDate.toISOString(), expectedDate)
  })

  it('parses the SQL datetime format without milliseconds', () => {
    const date = '2000-03-15 05:20:10'
    const expectedDate = '2000-03-15T05:20:10.000Z'
    const parsedDate = parseJSON(date)
    assert.equal(parsedDate.toISOString(), expectedDate)
  })

  it('parses the SQL datetime format with up to 7 millisecond digits', () => {
    const date = '2000-03-15 05:20:10.1234567'
    const expectedDate = '2000-03-15T05:20:10.123Z'
    const parsedDate = parseJSON(date)
    assert.equal(parsedDate.toISOString(), expectedDate)
  })

  it('clones a date object', () => {
    const date = new Date(2000, 2, 15, 5, 20, 10, 20)
    const parsedDate = parseJSON(date)
    assert.deepEqual(parsedDate, date)
    assert.notEqual(parsedDate, date)
  })

  it('assumes a number is a timestamp', () => {
    const date = new Date(2000, 2, 15, 5, 20, 10, 20)
    const timestamp = date.getTime()
    const parsedDate = parseJSON(timestamp)
    assert.deepEqual(parsedDate, date)
  })

  it('returns an invalid date for anything else', () => {
    assert.equal(parseJSON('').toString(), 'Invalid Date')
    assert.equal(parseJSON('invalid').toString(), 'Invalid Date')
    assert.equal(parseJSON('2020-10-10').toString(), 'Invalid Date')
  })
})
