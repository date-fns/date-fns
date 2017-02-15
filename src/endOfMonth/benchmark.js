// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import endOfMonth from '.'
import moment from 'moment'

suite('endOfMonth', function () {
  benchmark('date-fns', function () {
    return endOfMonth(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.endOf('month')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
