// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var eachDayOfInterval = require('./')

suite('eachDayOfInterval', function () {
  benchmark('date-fns', function () {
    return eachDayOfInterval({start: this.dateA, end: this.dateB})
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
