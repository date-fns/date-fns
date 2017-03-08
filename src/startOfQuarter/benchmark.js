// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import startOfQuarter from '.'
import moment from 'moment'

suite('startOfQuarter', function () {
  benchmark('date-fns', function () {
    return startOfQuarter(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.startOf('quarter')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
