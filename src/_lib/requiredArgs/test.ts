// @flow
/* eslint-env mocha */
import assert from 'assert'

import requiredArgs from '.'


describe('requiredArgs', function() {
  function wrapperFn(required) {
    // $ExpectedMistake
    return function() {
      requiredArgs(required, arguments)
    }
  }
  const twoArgsRequired = wrapperFn(2)

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'context'.
  context('with correct number of passed arguments', function() {
    it('does not throw an error', function() {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
      assert.doesNotThrow(() => twoArgsRequired(1, 2))
    })
  })

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'context'.
  context('with wrong number of arguments', function() {
    it('throws correct error message', function() {
      assert.throws(
        function() {
          // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 1.
          twoArgsRequired(1)
        },
        function(err) {
          return (
            err instanceof TypeError &&
            err.message === '2 arguments required, but only 1 present'
          )
        }
      )
    })
  })
})
