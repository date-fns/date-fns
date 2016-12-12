// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var setISOYear = require('./')
var moment = require('moment')

suite('setISOYear', function () {
  benchmark('date-fns', function () {
    return setISOYear(this.date, 2008)
  })

  benchmark('Moment.js', function () {
    return this.moment.isoWeekYear(2008)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
