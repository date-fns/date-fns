/* eslint-env mocha */

import assert from 'assert'
import toDate from '.'

describe('toDate', () => {
  describe('date argument', () => {
    it('returns a clone of the given date', () => {
      const date = new Date(2016, 0, 1)
      const dateClone = toDate(date)
      dateClone.setFullYear(2015)
      assert.deepStrictEqual(date, new Date(2016, 0, 1))
    })
  })

  describe('timestamp argument', () => {
    it('creates a date from the timestamp', () => {
      const timestamp = new Date(2016, 0, 1, 23, 30, 45, 123).getTime()
      const result = toDate(timestamp)
      assert.deepStrictEqual(result, new Date(2016, 0, 1, 23, 30, 45, 123))
    })
  })
})
