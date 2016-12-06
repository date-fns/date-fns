// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var getISOWeeksInYear = require('./')
var moment = require('moment')

suite('getISOWeeksInYear', function () {
  benchmark('date-fns', function () {
    return getISOWeeksInYear(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.isoWeeksInYear()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
