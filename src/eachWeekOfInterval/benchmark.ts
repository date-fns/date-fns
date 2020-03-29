// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import eachWeekOfInterval from '.'

suite('eachWeekOfInterval', function () {
  benchmark('date-fns', function () {
    return eachWeekOfInterval({start: this.dateA, end: this.dateB})
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 4233600000)
  }
})
