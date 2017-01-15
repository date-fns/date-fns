// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var getTime = require('./')
var moment = require('moment')

suite('getTime', function () {
  benchmark('date-fns', function () {
    return getTime(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.valueOf()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
