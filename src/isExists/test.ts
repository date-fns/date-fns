/* eslint-env mocha */

import assert from 'assert'
import { describe, it } from 'vitest'
import isExists from './index'

describe('isValid', () => {
  it('returns true if the given date is valid', () => {
    const result = isExists(2018, 0, 31)
    assert(result === true)
  })

  it('returns false if the given date is invalid', () => {
    const result = isExists(2018, 1 /* Feb */, 31)
    assert(result === false)
  })
  /* TUKE new Test */
  it('date from the future', () => {
    const result = isExists(2677, 5, 5)
    assert(result === true)
  })

  it('date from past millenium', () => {
    const result = isExists(1255, 5, 5)
    assert(result === true)
  })

  it('date from the very beginning', () => {
    const result = isExists(1, 1, 1)
    assert(result === true)
  })
})
