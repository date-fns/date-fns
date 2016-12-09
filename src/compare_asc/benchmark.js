// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var compareAsc = require('./')

suite('compareAsc', function () {
  benchmark('date-fns', function () {
    return compareAsc(this.dateA, this.dateB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
