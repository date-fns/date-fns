// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import formatDate from '.'
import moment from 'moment'

suite('formatDate', function () {
  benchmark('date-fns', function () {
    return formatDate(this.date, 'dddd, MMMM Do YYYY, h:mm:ss a')
  })

  benchmark('Moment.js', function () {
    return this.moment.formatDate('dddd, MMMM Do YYYY, h:mm:ss a')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
