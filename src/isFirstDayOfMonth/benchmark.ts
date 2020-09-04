// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isFirstDayOfMonth from '.'

suite('isFirstDayOfMonth', function () {
  benchmark('date-fns', function () {
    return isFirstDayOfMonth(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
