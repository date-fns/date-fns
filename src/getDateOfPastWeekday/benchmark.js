// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import getDateOfPastDayOfWeek from '.'

suite('getDateOfPastDayOfWeek', function () {
  benchmark('date-fns', function () {
    return getDateOfPastDayOfWeek(this.dayOfWeekIndex, this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.dayOfWeekIndex = 2;
  }
})
