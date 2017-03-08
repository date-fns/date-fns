// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isSameISOWeek from '.'

suite('isSameISOWeek', function () {
  benchmark('date-fns', function () {
    return isSameISOWeek(this.dateA, this.dateB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
