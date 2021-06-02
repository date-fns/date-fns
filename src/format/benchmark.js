// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import format from '.'
import moment from 'moment'

suite('format', function () {
  benchmark('date-fns', function () {
    return format(this.date, 'dddd, MMMM Do YYYY, h:mm:ss a')
  })

  benchmark('Moment.js', function () {
    return this.moment.format('dddd, MMMM Do YYYY, h:mm:ss a')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
