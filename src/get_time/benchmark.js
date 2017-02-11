// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import getTime from '.'
import moment from 'moment'

suite('getTime', function () {
  benchmark('date-fns', function () {
    return getTime(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.valueOf()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
