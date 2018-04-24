/* eslint-env mocha */
var assert = require('power-assert')
var addDuration = require('./')

describe('addDuration', function () {
  it('adds P1Y to date', function () {
    var result = addDuration(new Date('2000-01-01T00:00:00'), 'P1Y')
    assert.deepEqual(result, new Date('2001-01-01T00:00:00'))
  })

  it('adds P1M to date', function () {
    var result = addDuration(new Date('2000-01-01T00:00:00'), 'P1M')
    assert.deepEqual(result, new Date('2000-02-01T00:00:00'))
  })

  it('adds P1W to date', function () {
    var result = addDuration(new Date('2000-01-01T00:00:00'), 'P1W')
    assert.deepEqual(result, new Date('2000-01-08T00:00:00'))
  })

  it('adds P1D to date', function () {
    var result = addDuration(new Date('2000-01-01T00:00:00'), 'P1D')
    assert.deepEqual(result, new Date('2000-01-02T00:00:00'))
  })

  it('adds PT1H to date', function () {
    var result = addDuration(new Date('2000-01-01T00:00:00'), 'PT1H')
    assert.deepEqual(result, new Date('2000-01-01T01:00:00'))
  })

  it('adds PT1M to date', function () {
    var result = addDuration(new Date('2000-01-01T00:00:00'), 'PT1M')
    assert.deepEqual(result, new Date('2000-01-01T00:01:00'))
  })

  it('adds PT1S to date', function () {
    var result = addDuration(new Date('2000-01-01T00:00:00'), 'PT1S')
    assert.deepEqual(result, new Date('2000-01-01T00:00:01'))
  })

  it('adds P1Y1M1W1DT1H1M1S to date', function () {
    var result = addDuration(new Date('2000-01-01T00:00:00'), 'P1Y1M1W1DT1H1M1S')
    assert.deepEqual(result, new Date('2001-02-09T01:01:01'))
  })

  it('responds `Invalid Date` if duration is invalid', function () {
    var result = addDuration(new Date('2000-01-01T00:00:01'), 'I\'m invalid')
    assert.equal(result, 'Invalid Date')
  })
})

