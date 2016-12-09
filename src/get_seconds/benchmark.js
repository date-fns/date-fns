// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var getSeconds = require('./')
var moment = require('moment')

suite('getSeconds', function () {
  benchmark('date-fns', function () {
    return getSeconds(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.seconds()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
