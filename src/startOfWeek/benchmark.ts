// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import startOfWeek from '.'
import moment from 'moment'

suite('startOfWeek', function () {
  benchmark('date-fns', function () {
    return startOfWeek(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.startOf('week')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
