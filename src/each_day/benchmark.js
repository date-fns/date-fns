// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var eachDay = require('./')

suite('eachDay', function () {
  benchmark('date-fns', function () {
    return eachDay(this.dateA, this.dateB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
