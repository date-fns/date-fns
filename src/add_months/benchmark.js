// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import addMonths from '.'
import moment from 'moment'

suite('addMonths', function () {
  benchmark('date-fns', function () {
    return addMonths(this.date, 4)
  })

  benchmark('Moment.js', function () {
    return this.moment.add(4, 'months')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
