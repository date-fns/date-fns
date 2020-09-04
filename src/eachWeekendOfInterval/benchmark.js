// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import eachWeekendOfInterval from '.'

suite('eachWeekendOfInterval', function () {
  benchmark('date-fns', function () {
    return eachWeekendOfInterval({start: this.dateStart, end: this.dateEnd})
  })
}, {
  setup: function () {
    this.dateStart = new Date(2022, 0, 1)
    this.dateEnd = new Date(2022, 11, 31)
  }
})
