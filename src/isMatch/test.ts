// @flow
/* eslint-env mocha */
import assert from 'assert'

import isMatch from '.'
import eo from '../locale/eo'


describe('isMatch', function() {
  it('accepts a dd-MM-yyyy format against 22-02-1998', function() {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 2.
    assert(isMatch('22-02-1998', 'dd-MM-yyyy'))
  })

  it('reject a yyyy-dd-MM format against 22-02-1998', function() {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 2.
    assert(!isMatch('22-02-1998', 'yyyy-dd-MM'))
  })

  it('accepts a date & format with locale', function() {
    assert(
      isMatch('28-a de februaro', "do 'de' MMMM", {
        locale: eo
      })
    )
  })
})
