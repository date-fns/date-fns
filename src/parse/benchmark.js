// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var parse = require('./')
var moment = require('moment')

suite('parse', function () {
  benchmark('date-fns', function () {
    return parse('2014-10-25T13:46:20+07:00')
  })

  benchmark('Moment.js', function () {
    return moment('2014-10-25T13:46:20+07:00')
  })
})
