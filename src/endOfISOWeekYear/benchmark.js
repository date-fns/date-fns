// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import endOfISOWeekYear from '.'

suite('endOfISOWeekYear', function () {
  benchmark('date-fns', function () {
    return endOfISOWeekYear(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
