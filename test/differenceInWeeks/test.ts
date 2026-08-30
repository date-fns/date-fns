import { describe, it, expect } from 'vitest'
import { differenceInWeeks } from '../../src/differenceInWeeks/index.ts'

describe('differenceInWeeks – DST and rounding edge cases', () => {
  it('handles DST spring-forward correctly (23-hour day)', () => {
    const earlier = new Date(2024, 2, 10, 0, 0)
    const later = new Date(2024, 2, 17, 0, 0)
    expect(differenceInWeeks(later, earlier)).toBe(1)
  })

  it('handles DST fall-back correctly (25-hour day)', () => {
    const earlier = new Date(2024, 10, 3, 0, 0)
    const later = new Date(2024, 10, 10, 0, 0)
    expect(differenceInWeeks(later, earlier)).toBe(1)
  })

  it('supports roundingMethod: "ceil"', () => {
    expect(
      differenceInWeeks(
        new Date(2020, 0, 10),
        new Date(2020, 0, 5),
        { roundingMethod: 'ceil' }
      )
    ).toBe(1)
  })

  it('supports roundingMethod: "floor"', () => {
    expect(
      differenceInWeeks(
        new Date(2020, 0, 10),
        new Date(2020, 0, 6),
        { roundingMethod: 'floor' }
      )
    ).toBe(0)
  })

  it('supports roundingMethod: "round"', () => {
    expect(
      differenceInWeeks(
        new Date(2020, 0, 10),
        new Date(2020, 0, 5, 12),
        { roundingMethod: 'round' }
      )
    ).toBe(1)
  })

  it('supports roundingMethod: "trunc"', () => {
    expect(
      differenceInWeeks(
        new Date(2020, 0, 10),
        new Date(2020, 0, 6),
        { roundingMethod: 'trunc' }
      )
    ).toBe(0)
  })
})
