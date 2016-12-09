// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var startOfQuarter = require('./')
var moment = require('moment')

suite('startOfQuarter', function () {
  benchmark('date-fns', function () {
    return startOfQuarter(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.startOf('quarter')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
