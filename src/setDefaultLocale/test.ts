/* eslint-env mocha */

import assert from 'assert'
import setDefaultLocale from '.'
import { _defaultLocale } from '../_lib/defaultLocale/index'
import eo from '../locale/eo'
import { resetDefaultLocale } from '../_lib/test'

describe('setDefaultLocale', () => {
  afterEach(resetDefaultLocale)

  it('changes the internal `_defaultLocale` object', () => {
    setDefaultLocale(eo)
    assert.strictEqual(_defaultLocale, eo)
  })

  it('using `undefined` as an argument deletes `_defaultLocale`', () => {
    setDefaultLocale(eo)
    setDefaultLocale(undefined)
    assert.strictEqual(_defaultLocale, undefined)
  })

  it("so does not providing any argument at all, but don't tell TypeScript about it", () => {
    setDefaultLocale(eo)
    // @ts-expect-error
    setDefaultLocale()
    assert.strictEqual(_defaultLocale, undefined)
  })
})
