// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var format = require('./')
var moment = require('moment')

suite('parse', function () {
  benchmark('date-fns', function () {
    return parse("Tuesday, January 10th 2017, 11:07:40 am", 'dddd, MMMM Do YYYY, h:mm:ss a')
  })

  benchmark('Moment.js', function () {
    return moment("Tuesday, January 10th 2017, 11:07:40 am", 'dddd, MMMM Do YYYY, h:mm:ss a')
  })
})
