// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isThisHour = require('./')

suite('isThisHour', function () {
  benchmark('date-fns', function () {
    return isThisHour(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
