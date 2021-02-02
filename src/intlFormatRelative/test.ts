// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import intlFormatRelative from '.'

describe('intlFormatRelative', function () {
  it('10 days ago', function () {
    var result = intlFormatRelative(-10, 'day')
    assert(result === '10 days ago')
  })

  it('in 10 days', function () {
    var result = intlFormatRelative(10, 'day')
    assert(result === 'in 10 days')
  })

  it('42 years ago', function () {
    var result = intlFormatRelative(-42, 'year')
    assert(result === '42 years ago')
  })

  it('in 30 seconds in spanish', function () {
    var result = intlFormatRelative(30, 'second', 'es')
    assert(result === 'dentro de 30 segundos')
  })

  it('next week', function () {
    var result = intlFormatRelative(1, 'week', 'en', {
      numeric: 'auto',
      style: 'long',
      localeMatcher: 'best fit',
    })
    assert(result === 'next week')
  })
})
