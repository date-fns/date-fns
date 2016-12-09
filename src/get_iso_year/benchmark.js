// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var getISOYear = require('./')
var moment = require('moment')

suite('getISOYear', function () {
  benchmark('date-fns', function () {
    return getISOYear(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.isoWeekYear()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
