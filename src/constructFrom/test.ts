import assert from 'assert'
import { describe, it } from 'vitest'
import constructFrom from '.'

describe('constructFrom', () => {
  it('should create a new Date instance using the constructor from the reference date', () => {
    const referenceDate = new Date('2023-10-25T12:00:00')
    const value = new Date('2023-10-26T12:00:00')

    const result = constructFrom(referenceDate, value)

    assert.ok(result instanceof Date)
    assert.deepStrictEqual(result, value)
    assert.strictEqual(result.constructor, referenceDate.constructor)
  })

  it('should create a new Date instance using a number as the reference date', () => {
    const referenceDate = 1635158400000 // October 25, 2023
    const value = new Date('2023-10-26T12:00:00')

    const result = constructFrom(referenceDate, value)

    assert.ok(result instanceof Date)
    assert.deepStrictEqual(result, value)
  })

  it('should create a new custom Date instance using the constructor from the reference date', () => {
    class CustomDate extends Date {}
    const referenceDate = new CustomDate('2023-10-25T12:00:00')
    const value = new CustomDate('2023-10-26T12:00:00')

    const result = constructFrom(referenceDate, value)

    assert.ok(result instanceof CustomDate)
    assert.deepStrictEqual(result, value)
    assert.strictEqual(result.constructor, referenceDate.constructor)
  })

  it('should create a new custom Date instance using a number as the reference date', () => {
    class CustomDate extends Date {}
    const referenceDate = new CustomDate(1635158400000) // October 25, 2023
    const value = new CustomDate('2023-10-26T12:00:00')

    const result = constructFrom(referenceDate, value)

    assert.ok(result instanceof CustomDate)
    assert.deepStrictEqual(result, value)
    assert.strictEqual(result.constructor, CustomDate)
  })
})
