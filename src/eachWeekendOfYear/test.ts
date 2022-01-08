/* eslint-env mocha */

import assert from 'assert'
import eachWeekendOfYear from '.'
import isWeekend from '../isWeekend'

describe('eachWeekendOfYear', () => {
  it('returns all weekends of the given year', () => {
    const result = eachWeekendOfYear(new Date(2020, 0, 1))
    assert(result.length === 104)
    assert(result.every(isWeekend))
    assert.deepStrictEqual(result[0], new Date(2020, 0, 4))
    assert.deepStrictEqual(result[103], new Date(2020, 11, 27))
  })

  it('throws RangeError exception when date is invalid', () => {
    assert.throws(eachWeekendOfYear.bind(null, new Date(NaN)), RangeError)
  })
})
