// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import durationPerHour from '.'

suite('durationPerHour', function () {
  benchmark('date-fns', function () {
    return durationPerHour(this.dateA, this.dateB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 7684559)
  }
})
