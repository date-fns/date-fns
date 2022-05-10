/* eslint-env mocha */

import assert from 'assert'
import getDefaultLocale from '.'
import setDefaultLocale from '../setDefaultLocale'
import enUS from '../locale/en-US'
import eo from '../locale/eo'
import { resetDefaultLocale } from '../_lib/test'

describe('getDefaultLocale', () => {
  afterEach(resetDefaultLocale)

  it('by default returns locale en-US', () => {
    const result = getDefaultLocale()
    assert.strictEqual(result, enUS)
  })

  it('returns the locale set with setDefaultLocale', () => {
    setDefaultLocale(eo)
    const result = getDefaultLocale()
    assert.strictEqual(eo, result)
  })
})
