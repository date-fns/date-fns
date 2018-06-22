// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import parse from '../parse'
import parseDate from '.'

describe('parseDate', function () {
  it('exports a reference to parse', function () {
    assert.equal(parse, parseDate)
  })
})
