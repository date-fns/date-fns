import { describe, expect, it } from 'vitest'
import { tz } from '@date-fns/tz'
import isLeapDecade from './index.js'

describe('isLeapDecade', () => {
  it('returns false for a decade with less than 3 leap years (1990s)', () => {
    expect(isLeapDecade(new Date(1995, 0, 1))).toBe(false)
  })

  it('returns false for a decade with less than 3 leap years (2010s)', () => {
    expect(isLeapDecade(new Date(2017, 0, 1))).toBe(false)
  })

  it('works with a timestamp', () => {
    const timestamp = new Date(2004, 0, 1).getTime()
    expect(isLeapDecade(timestamp)).toBe(true)
  })

  it('returns true for the 2000s', () => {
    expect(isLeapDecade(new Date(2004, 0, 1))).toBe(true)
  })

  it('returns false for the 1900s', () => {
    expect(isLeapDecade(new Date(1900, 0, 1))).toBe(false)
  })

  it('returns false if the input is an Invalid Date', () => {
    expect(isLeapDecade(new Date(NaN))).toBe(false)
  })

  describe('context', () => {
    it('handles time zone context correctly', () => {
      expect(
        isLeapDecade('2000-01-01T00:00:00Z', {
          in: tz('Asia/Singapore'),
        }),
      ).toBe(true)
    })
  })
})
