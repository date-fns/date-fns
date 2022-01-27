/* eslint-env mocha */

import assert from 'assert'
import setLocale, { getLocale } from '.'
import format from '../format'
import enUS from '../locale/en-US'
import ru from '../locale/ru'

describe('setLocale', () => {
  afterEach(() => {
    setLocale(enUS)
  })

  it('allows to set the current locale', () => {
    const date = new Date(2014, 6, 2)
    assert(format(date, 'PPpp') === 'Jul 2, 2014, 12:00:00 AM')
    setLocale(ru)
    assert(format(date, 'PPpp') === '2 июл. 2014 г., 0:00:00')
  })

  describe('getLocale', () => {
    it('returns the current locale', () => {
      assert(getLocale() === enUS)
      setLocale(ru)
      assert(getLocale() === ru)
    })
  })
})
