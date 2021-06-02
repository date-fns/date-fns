// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import lastDayOfMonth from '.'

suite('lastDayOfMonth', function () {
  benchmark('date-fns', function () {
    return lastDayOfMonth(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
