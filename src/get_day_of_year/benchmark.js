// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var getDayOfYear = require('./')
var moment = require('moment')

suite('getDayOfYear', function () {
  benchmark('date-fns', function () {
    return getDayOfYear(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.dayOfYear()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
