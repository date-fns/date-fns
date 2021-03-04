// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import requiredArgs from '.'

describe('requiredArgs', function () {
  function wrapperFn(required) {
    // $ExpectedMistake
    return function () {
      requiredArgs(required, arguments)
    }
  }
  const twoArgsRequired = wrapperFn(2)

  describe('with correct number of passed arguments', function () {
    it('does not throw an error', function () {
      assert.doesNotThrow(() => twoArgsRequired(1, 2))
    })
  })

  describe('with wrong number of arguments', function () {
    it('throws correct error message', function () {
      assert.throws(
        function () {
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
