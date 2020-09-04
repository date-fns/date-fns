// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isSunday from '.'

suite('isSunday', function () {
  benchmark('date-fns', function () {
    return isSunday(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
