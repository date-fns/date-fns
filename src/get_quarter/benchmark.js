// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var getQuarter = require('./')
var moment = require('moment')

suite('getQuarter', function () {
  benchmark('date-fns', function () {
    return getQuarter(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.quarter()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
