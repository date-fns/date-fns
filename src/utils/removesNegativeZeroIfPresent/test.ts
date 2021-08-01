// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import removesNegativeZeroIfPresent from '.'

describe('removesNegativeZeroIfPresent', () => {
    it("returns the original number if it isn't -0", () => {
      const result = removesNegativeZeroIfPresent(2)
      assert(Object.is(result, 2))
    })

    it("returns 0 if the argument is 0", () => {
      const result = removesNegativeZeroIfPresent(0)
      assert(Object.is(result, 0))
    })

    it("returns 0 if the argument is -0", () => {
      const result = removesNegativeZeroIfPresent(-0)
      assert(Object.is(result, 0))
    })

})
