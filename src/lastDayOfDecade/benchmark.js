// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import lastDayOfDecade from '.'

suite('lastDayOfYear', function () {
  benchmark('date-fns', function () {
    return lastDayOfDecade(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
