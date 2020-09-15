// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import parseISODuration from '.'

describe('parseISODuration', () => {
  describe('parsing', () => {
    it('parses with all members', () => {
      const result = parseISODuration('P2.2Y3.3M4.4DT5.5H6.6M7.7S')
      assert.deepEqual(result, {
        years: 2.2,
        months: 3.3,
        days: 4.4,
        hours: 5.5,
        minutes: 6.6,
        seconds: 7.7
      })
    })

    it('parses without time', () => {
      const result = parseISODuration('P2Y3M5D')
      assert.deepEqual(result, { years: 2, months: 3, days: 5 })
    })

    it('parses missing years without time', () => {
      const result = parseISODuration('P3M5D')
      assert.deepEqual(result, { months: 3, days: 5 })
    })

    it('parses missing months without time', () => {
      const result = parseISODuration('P2Y5D')
      assert.deepEqual(result, { years: 2, days: 5 })
    })

    it('parses missing days without time', () => {
      const result = parseISODuration('P2Y3M')
      assert.deepEqual(result, { years: 2, months: 3 })
    })

    it('parses without days', () => {
      const result = parseISODuration('PT65H40M22S')
      assert.deepEqual(result, { hours: 65, minutes: 40, seconds: 22 })
    })

    it('parses missing hours without date', () => {
      const result = parseISODuration('PT3M4S')
      assert.deepEqual(result, { minutes: 3, seconds: 4 })
    })

    it('parses missing minutes without date', () => {
      const result = parseISODuration('PT2H4S')
      assert.deepEqual(result, { hours: 2, seconds: 4 })
    })

    it('parses missing seconds without date', () => {
      const result = parseISODuration('PT2H3M')
      assert.deepEqual(result, { hours: 2, minutes: 3 })
    })
  })

  describe('validation', () => {
    it('returns `null` for invalid string', () => {
      const result = parseISODuration('abcdef')
      assert(result === null)
    })
    it('returns null when all parts are missing', () => {
      const result = parseISODuration('P')
      assert.deepEqual(result, null)
    })
    it('returns null for non-string', () => {
      // $ExpectedMistake
      const result = parseISODuration(150)
      assert(result === null)
    })
    it('throws TypeError exception if passed less than 1 argument', () => {
      assert.throws(parseISODuration.bind(null), TypeError)
    })
  })
})
