// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import getHours from '.'
import moment from 'moment'

suite('getHours', function () {
  benchmark('date-fns', function () {
    return getHours(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.hours()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
