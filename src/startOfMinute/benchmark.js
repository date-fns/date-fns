// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import startOfMinute from '.'
import moment from 'moment'

suite('startOfMinute', function () {
  benchmark('date-fns', function () {
    return startOfMinute(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.startOf('minute')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
