// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import addISOWeekYears from '.'

suite('addISOWeekYears', function () {
  benchmark('date-fns', function () {
    return addISOWeekYears(this.date, 7)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
