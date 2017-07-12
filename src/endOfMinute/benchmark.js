// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import endOfMinute from '.'
import moment from 'moment'

suite('endOfMinute', function () {
  benchmark('date-fns', function () {
    return endOfMinute(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.endOf('minute')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
