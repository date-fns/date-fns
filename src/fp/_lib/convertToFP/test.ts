/* eslint-env mocha */

import assert from 'assert'
import convertToFP from './index'

describe('convertToFP', () => {
  function fn(a: unknown, b: unknown, c: unknown) {
    return 'a b c'
      .replace('a', String(a))
      .replace('b', String(b))
      .replace('c', String(c))
  }

  describe('arity of converted function === arity of initial function', () => {
    it('allows arguments to be curried (and reverses their order)', () => {
      const fpFn = convertToFP(fn, 3)
      assert(fpFn(3)(2)(1) === '1 2 3')
    })

    it('allows to group arguments', () => {
      const fpFn = convertToFP(fn, 3)
      assert(fpFn(3, 2)(1) === '1 2 3')
      assert(fpFn(3)(2, 1) === '1 2 3')
    })

    it('allows the function to be called with all arguments in the reversed order', () => {
      const fpFn = convertToFP(fn, 3)
      assert(fpFn(3, 2, 1) === '1 2 3')
    })

    it('ignores calls without curried arguments', () => {
      const fpFn = convertToFP(fn, 3)
      assert(fpFn()()(3, 2)()()(1) === '1 2 3')
    })

    it('ignores extra curried arguments in the last group', () => {
      const fpFn = convertToFP(fn, 3)
      assert(fpFn(3, 2, 1, 0, -1, -2) === '1 2 3')
      assert(fpFn(3)(2)(1, 0, -1, -2) === '1 2 3')
    })
  })

  describe('arity of converted function < arity of initial function', () => {
    it('calls the initial function with a short list of arguments', () => {
      const fpFn = convertToFP(fn, 2)
      assert(fpFn(2)(1) === '1 2 undefined')
      assert(fpFn(2, 1) === '1 2 undefined')
    })

    it('ignores extra curried arguments in the last group', () => {
      const fpFn = convertToFP(fn, 2)
      assert(fpFn(3)(2, 1) === '2 3 undefined')
      assert(fpFn(3, 2, 1) === '2 3 undefined')
    })
  })

  describe('arity of converted function > arity of initial function', () => {
    it('works, but ignores the extra arguments', () => {
      const fpFn = convertToFP(fn, 4)
      assert(fpFn(4)(3)(2)(1) === '1 2 3')
      assert(fpFn(4, 3, 2, 1) === '1 2 3')
    })
  })

  describe('arity of converted function === 0', () => {
    it('returns the constant instead of function', () => {
      const result = convertToFP(fn, 0)
      assert(result === 'undefined undefined undefined')
    })
  })
})
