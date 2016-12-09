// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var setISOWeek = require('./')
var moment = require('moment')

suite('setISOWeek', function () {
  benchmark('date-fns', function () {
    return setISOWeek(this.date, 10)
  })

  benchmark('Moment.js', function () {
    return this.moment.isoWeek(10)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
