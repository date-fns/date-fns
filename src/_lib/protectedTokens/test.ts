/* eslint-env mocha */

import assert from 'assert'
import { isProtectedDayOfYearToken, isProtectedWeekYearToken } from './index'

describe('isProtectedDayOfYearToken', () => {
  it('returns true for protected day of year tokens', () => {
    const arr = [
      isProtectedDayOfYearToken('D'),
      isProtectedDayOfYearToken('DD'),
    ]
    arr.forEach((result) => assert(result === true))
  })
})

describe('isProtectedWeekYearToken', () => {
  it('returns true for protected week year tokens', () => {
    const arr = [
      isProtectedWeekYearToken('YY'),
      isProtectedWeekYearToken('YYYY'),
    ]
    arr.forEach((result) => assert(result === true))
  })
})
