// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isFirstWeekOfMonth from '.'

suite('isFirstWeekOfMonth', function () {
  benchmark('date-fns', function () {
    return isFirstWeekOfMonth(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
