/* eslint-env mocha */

import assert from 'assert'
import getDefaultOptions from '.'
import setDefaultOptions from '../setDefaultOptions'
import startOfWeek from '../startOfWeek'
import {
  getDefaultOptions as getInternalDefaultOptions,
  setDefaultOptions as setInternalDefaultOptions,
} from '../_lib/defaultOptions/index'
import eo from '../locale/eo'
import { resetDefaultOptions } from '../_lib/test'

describe('getDefaultOptions', () => {
  afterEach(resetDefaultOptions)

  it('returns an empty object', () => {
    const result = getDefaultOptions()
    assert.deepStrictEqual(result, {})
  })

  it('returns a clone of the original object', () => {
    setInternalDefaultOptions({ weekStartsOn: 1 })
    const result = getDefaultOptions()
    assert.deepStrictEqual(getInternalDefaultOptions(), result)
  })

  it('mutating the result does not affect functions that use options', () => {
    const defaultOptionsClone = getDefaultOptions()
    defaultOptionsClone.weekStartsOn = 1
    const result = startOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
    assert.deepStrictEqual(result, new Date(2014, 7 /* Aug */, 31))

    // Mutating the original object does affect `startOfWeek`
    const _defaultOptions = getInternalDefaultOptions()
    _defaultOptions.weekStartsOn = 1
    const result2 = startOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
    assert.deepStrictEqual(result2, new Date(2014, 8 /* Sep */, 1))
  })

  it('returns new values after setting them via `setDefaultOptions`', () => {
    setDefaultOptions({ weekStartsOn: 1, firstWeekContainsDate: 4, locale: eo })
    const result = getDefaultOptions()
    assert.deepStrictEqual(result, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: eo,
    })
  })
})
