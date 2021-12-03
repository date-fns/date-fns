// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isMatch from '.'
import eo from '../locale/eo'

describe('isMatch', function () {
  it('accepts a dd-MM-yyyy format against 22-02-1998', function () {
    assert(isMatch('22-02-1998', 'dd-MM-yyyy'))
  })

  it('reject a yyyy-dd-MM format against 22-02-1998', function () {
    assert(!isMatch('22-02-1998', 'yyyy-dd-MM'))
  })

  it('reject a dd/MM/yyyy format against 17/12/20', function () {
    assert(!isMatch('17/12/20', 'dd/MM/yyyy'))
  })

  it('reject a dd/MM/yyy format against 17/12/20', function () {
    assert(!isMatch('17/12/20', 'dd/MM/yyy'))
  })

  it('accepts a date & format with locale', function () {
    assert(
      isMatch('28-a de februaro', "do 'de' MMMM", {
        // @ts-expect-error
        locale: eo,
      })
    )
  })
})
