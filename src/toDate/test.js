// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import toDate from '.'

describe('toDate', () => {
  describe('date argument', () => {
    it('returns a clone of the given date', () => {
      const date = new Date(2016, 0, 1)
      const dateClone = toDate(date)
      dateClone.setFullYear(2015)
      assert.deepEqual(date, new Date(2016, 0, 1))
    })
  })

  describe('timestamp argument', () => {
    it('creates a date from the timestamp', () => {
      const timestamp = new Date(2016, 0, 1, 23, 30, 45, 123).getTime()
      const result = toDate(timestamp)
      assert.deepEqual(result, new Date(2016, 0, 1, 23, 30, 45, 123))
    })
  })

  describe('invalid argument', () => {
    mockConsoleWarn()

    it('returns Invalid Date if argument is a string', () => {
      // $ExpectedMistake
      const result = toDate('1987-02-11')
      assert(result instanceof Date)
      assert(isNaN(result))
    })

    it('prints deprecation warning if the argument is a string', () => {
      // $ExpectedMistake
      console.warn = sinon.spy()
      // $ExpectedMistake
      toDate('1987-02-11')
      assert(
        console.warn.calledWith(
          "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"
        )
      )
    })

    it('returns Invalid Date if argument is NaN', () => {
      const result = toDate(NaN)
      assert(result instanceof Date)
      assert(isNaN(result))
    })

    it('returns Invalid Date if argument is Invalid Date', () => {
      const result = toDate(new Date(NaN))
      assert(result instanceof Date)
      assert(isNaN(result))
    })

    it('returns Invalid Date if argument is null', () => {
      // $ExpectedMistake
      const result = toDate(null)
      assert(result instanceof Date)
      assert(isNaN(result))
    })

    it('returns Invalid Date if argument is undefined', () => {
      // $ExpectedMistake
      const result = toDate(undefined)
      assert(result instanceof Date)
      assert(isNaN(result))
    })

    it('returns Invalid Date if argument is false', () => {
      // $ExpectedMistake
      const result = toDate(false)
      assert(result instanceof Date)
      assert(isNaN(result))
    })

    it('returns Invalid Date if argument is true', () => {
      // $ExpectedMistake
      const result = toDate(true)
      assert(result instanceof Date)
      assert(isNaN(result))
    })
  })

  describe('argument conversion', () => {
    it('implicitly converts instance of Number into a number', () => {
      // eslint-disable-next-line no-new-wrappers
      const timestamp = new Number(
        new Date(2016, 0, 1, 23, 30, 45, 123).getTime()
      )
      // $ExpectedMistake
      const result = toDate(timestamp)
      assert.deepEqual(result, new Date(2016, 0, 1, 23, 30, 45, 123))
    })
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    assert.throws(toDate.bind(null), TypeError)
  })
})

function mockConsoleWarn() {
  let originalWarn

  beforeEach(() => {
    originalWarn = console.warn
    // $ExpectedMistake
    console.warn = () => {}
  })

  afterEach(() => {
    // $ExpectedMistake
    console.warn = originalWarn
  })
}
