// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isSaturday from '.'

suite('isSaturday', function () {
  benchmark('date-fns', function () {
    return isSaturday(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
