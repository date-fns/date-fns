// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import durationsPerHour from '.'

suite('durationsPerHour', function () {
  benchmark('date-fns', function () {
    return durationsPerHour(this.dateA, this.dateB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 7684559)
  }
})
