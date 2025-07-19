import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest'
import { nextBusinessDay } from './index.js'

describe('nextBusinessDay', () => {
  // Freeze time for consistent tests when no date is provided
  beforeAll(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2025, 6, 20)) // Sunday, July 20, 2025
  })

  afterAll(() => {
    vi.useRealTimers()
  })

  it('returns next Monday after Friday', () => {
    const friday = new Date(2025, 6, 18)
    const result = nextBusinessDay(friday)
    expect(result).toEqual(new Date(2025, 6, 21))
  })

  it('returns next day if not weekend (Thursday -> Friday)', () => {
    const thursday = new Date(2025, 6, 17)
    const result = nextBusinessDay(thursday)
    expect(result).toEqual(new Date(2025, 6, 18))
  })

  it('skips weekend when starting on Saturday', () => {
    const saturday = new Date(2025, 6, 19)
    const result = nextBusinessDay(saturday)
    expect(result).toEqual(new Date(2025, 6, 21))
  })

  it('skips weekend when starting on Sunday', () => {
    const sunday = new Date(2025, 6, 20)
    const result = nextBusinessDay(sunday)
    expect(result).toEqual(new Date(2025, 6, 21))
  })

  it('defaults to next business day from today (Sunday -> Monday)', () => {
    const result = nextBusinessDay()
    expect(result).toEqual(new Date(2025, 6, 21))
  })

  it('skips custom holidays', () => {
    const wednesday = new Date(2025, 6, 2)
    const holiday = new Date(2025, 6, 3)
    const result = nextBusinessDay(wednesday, { holidays: [holiday] })
    expect(result).toEqual(new Date(2025, 6, 4))
  })
})
