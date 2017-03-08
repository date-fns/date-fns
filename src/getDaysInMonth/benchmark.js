// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import getDaysInMonth from '.'
import moment from 'moment'

suite('getDaysInMonth', function () {
  benchmark('date-fns', function () {
    return getDaysInMonth(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.daysInMonth()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
