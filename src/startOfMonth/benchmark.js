// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import startOfMonth from '.'
import moment from 'moment'

suite('startOfMonth', function () {
  benchmark('date-fns', function () {
    return startOfMonth(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.startOf('month')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
