// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import getMinutes from '.'
import moment from 'moment'

suite('getMinutes', function () {
  benchmark('date-fns', function () {
    return getMinutes(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.minutes()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
