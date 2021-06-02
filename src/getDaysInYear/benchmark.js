// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import getDaysInYear from '.'

suite('getDaysInYear', function () {
  benchmark('date-fns', function () {
    return getDaysInYear(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
