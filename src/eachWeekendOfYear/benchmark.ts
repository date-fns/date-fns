/* eslint-env mocha */
/* global suite, benchmark */

import eachWeekendOfYear from '.'

suite('eachWeekendOfYear', function () {
  benchmark('date-fns', function () {
    return eachWeekendOfYear(this.date)
  })
}, {
  setup: function () {
    this.date = new Date(2022, 7, 12)
  }
})
