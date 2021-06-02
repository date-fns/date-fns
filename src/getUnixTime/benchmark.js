// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import getUnixTime from '.'
import moment from 'moment'

suite('getTime', function () {
  benchmark('date-fns', function () {
    return getUnixTime(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.unix()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
