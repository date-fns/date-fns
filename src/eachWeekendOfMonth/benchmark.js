// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import eachWeekendOfMonth from '.'

suite('eachWeekendOfMonth', function () {
  benchmark('date-fns', function () {
    return eachWeekendOfMonth(this.date)
  })
}, {
  setup: function () {
    this.date = new Date(2020, 3, 20)
  }
})
