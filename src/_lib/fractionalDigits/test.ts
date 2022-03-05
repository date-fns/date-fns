/* eslint-env mocha */

import assert from 'assert'
import fractionalDigits from '.'

describe('fractionalDigits', () => {
  it('it adds fractional 4 digits', () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123)
    const fraction = fractionalDigits(4, date)
    assert(fraction === '.1230')
  })

  it('it only show 2 fractional digits', () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123)
    const fraction = fractionalDigits(2, date)
    assert(fraction === '.12')
  })

  it('it doesnt show any digits', () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123)
    const fraction = fractionalDigits(0, date)
    assert(fraction === '')
  })
})
