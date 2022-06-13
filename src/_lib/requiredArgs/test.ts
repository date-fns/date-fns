/* eslint-env mocha */

import assert from 'assert'
import requiredArgs from './index'

describe('requiredArgs', () => {
  function wrapperFn(required: number) {
    return function (..._args: any[]) {
      requiredArgs(required, arguments)
    }
  }
  const twoArgsRequired = wrapperFn(2)

  describe('with correct number of passed arguments', () => {
    it('does not throw an error', () => {
      assert.doesNotThrow(() => twoArgsRequired(1, 2))
    })
  })

  describe('with wrong number of arguments', () => {
    it('throws correct error message', () => {
      assert.throws(
        () => {
          twoArgsRequired(1)
        },
        function (err) {
          return (
            err instanceof TypeError &&
            err.message === '2 arguments required, but only 1 present'
          )
        }
      )
    })
  })
})
