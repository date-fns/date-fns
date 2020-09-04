// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import endOfDecade from '.'

suite('endOfDecade', function () {
  benchmark('date-fns', function () {
    return endOfDecade(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
