/* eslint-env mocha */

import assert from 'assert'
import defaultLocale from '.'
import frCA from '../locale/fr-CA/index'

describe('defaultLocale', () => {
  it('sets and gets the default locale', () => {
    // default locale out of the box is `en-US`
    const originalDefaultLocale = defaultLocale()
    assert.deepStrictEqual(originalDefaultLocale.code, 'en-US')

    // set default locale to `fr-CA`
    defaultLocale(frCA)
    assert.deepStrictEqual(defaultLocale().code, 'fr-CA')

    // reset to original locale
    defaultLocale(originalDefaultLocale)
    assert.deepStrictEqual(defaultLocale().code, 'en-US')
  })
})
