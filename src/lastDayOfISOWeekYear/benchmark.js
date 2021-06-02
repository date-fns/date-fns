// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import lastDayOfISOWeekYear from '.'

suite('lastDayOfISOWeekYear', function () {
  benchmark('date-fns', function () {
    return lastDayOfISOWeekYear(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
