// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var addISOYears = require('./')

suite('addISOYears', function () {
  benchmark('date-fns', function () {
    return addISOYears(this.date, 7)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
