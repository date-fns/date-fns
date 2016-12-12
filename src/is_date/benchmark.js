// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isDate = require('./')
var moment = require('moment')

suite('isDate', function () {
  benchmark('date-fns', function () {
    return isDate(this.string)
  })

  benchmark('Moment.js', function () {
    return moment.isDate(this.string)
  })
}, {
  setup: function () {
    this.string = '123'
  }
})
