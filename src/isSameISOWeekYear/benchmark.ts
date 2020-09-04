// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isSameISOWeekYear from '.'

suite('isSameISOWeekYear', function () {
  benchmark('date-fns', function () {
    return isSameISOWeekYear(this.dateA, this.dateB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
