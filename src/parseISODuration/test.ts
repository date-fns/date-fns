/* eslint-env mocha */

import { describe, it } from 'vitest'
import { parseISODuration } from './index'
import assert from 'assert'

describe('parseISODuration', () => {
  it('parses complete ISO duration P3Y6M1W4DT12H30M5S', () => {
    const result = parseISODuration('P3Y6M1W4DT12H30M5S')
    assert.deepStrictEqual(result, {
      years: 3,
      months: 6,
      weeks: 1,
      days: 4,
      hours: 12,
      minutes: 30,
      seconds: 5,
    })
  })

  it('parses partial ISO duration without time P1M', () => {
    const result = parseISODuration('P1M')
    assert.deepStrictEqual(result, {
      years: 0,
      months: 1,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
  })

  it('parses partial ISO duration with days P1D', () => {
    const result = parseISODuration('P1D')
    assert.deepStrictEqual(result, {
      years: 0,
      months: 0,
      weeks: 0,
      days: 1,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
  })

  it('parses partial ISO duration with time PT1M', () => {
    const result = parseISODuration('PT1M')
    assert.deepStrictEqual(result, {
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 1,
      seconds: 0,
    })
  })

  it('parses ISO duration without normalizing P23DT3000H', () => {
    const result = parseISODuration('P23DT3000H')
    assert.deepStrictEqual(result, {
      years: 0,
      months: 0,
      weeks: 0,
      days: 23,
      hours: 3000,
      minutes: 0,
      seconds: 0,
    })
  })

  it('parses ISO duration with period P1Y2M4DT20H44M12.67S', () => {
    const result = parseISODuration('P1Y2M4DT20H44M12.67S')
    assert.deepStrictEqual(result, {
      years: 1,
      months: 2,
      weeks: 0,
      days: 4,
      hours: 20,
      minutes: 44,
      seconds: 12.67,
    })
  })

  it('parses ISO duration with comma P1Y2M4DT20H44M12,67S', () => {
    const result = parseISODuration('P1Y2M4DT20H44M12,67S')
    assert.deepStrictEqual(result, {
      years: 1,
      months: 2,
      weeks: 0,
      days: 4,
      hours: 20,
      minutes: 44,
      seconds: 12.67,
    })
  })

  it('parses ISO duration with period in year P0.5Y', () => {
    const result = parseISODuration('P0.5Y')
    assert.deepStrictEqual(result, {
      years: 0.5,
      months: 0,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
  })

  it('parses ISO duration with zero values', () => {
    const result = parseISODuration('P0DT0S')
    assert.deepStrictEqual(result, {
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
  })

  it('returns `Invalid format` for empty string', () => {
    assert.throws(() => parseISODuration(''), RangeError("Invalid format"))
  })

  it('returns `Invalid format` for ISO duration with just P', () => {
    assert.throws(() => parseISODuration('P'), RangeError("Invalid format"))
  })

  it('returns `Invalid format` for ISO duration with nothing after T', () => {
    assert.throws(() => parseISODuration('P1MT'), RangeError("Invalid format"))
  })

  it('returns `Invalid format` for ISO duration with missing value', () => {
    assert.throws(() => parseISODuration('P3YT30MS'), RangeError("Invalid format"))
  })

  it('returns `Invalid format` for invalid ISO string', () => {
    assert.throws(() => parseISODuration('T1PSO'), RangeError("Invalid format"))
  })

  it('returns `Invalid format` for ISO string with missing T', () => {
    assert.throws(() => parseISODuration('P1H'), RangeError("Invalid format"))
  })

  it('returns `Invalid format` for ISO string with unnecessary T', () => {
    assert.throws(() => parseISODuration('PT1D'), RangeError("Invalid format"))
  })

  it('returns `Invalid format` for out of order ISO string', () => {
    assert.throws(() => parseISODuration('P1W1YT1M'), RangeError("Invalid format"))
  })
})
