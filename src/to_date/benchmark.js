// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var toDate = require('./')
var moment = require('moment')

suite('toDate', function () {
  benchmark('date-fns', function () {
    return toDate('2014-10-25T13:46:20+07:00')
  })

  benchmark('Moment.js', function () {
    return moment('2014-10-25T13:46:20+07:00')
  })
})
