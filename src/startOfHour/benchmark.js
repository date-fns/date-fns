// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import startOfHour from '.'
import moment from 'moment'

suite('startOfHour', function () {
  benchmark('date-fns', function () {
    return startOfHour(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.startOf('hour')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
