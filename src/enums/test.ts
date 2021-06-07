/* eslint-env mocha */

import assert from 'assert'
import { Month } from '.'

describe('hoursToMinutes', function () {
  it('checks that enums are right', function () {
    assert(Month.January === 0)
    assert(Month.February === 1)
    assert(Month.March === 2)
    assert(Month.April === 3)
    assert(Month.May === 4)
    assert(Month.June === 5)
    assert(Month.July === 6)
    assert(Month.August === 7)
    assert(Month.September === 8)
    assert(Month.October === 9)
    assert(Month.November === 10)
    assert(Month.December === 11)
  })

})
