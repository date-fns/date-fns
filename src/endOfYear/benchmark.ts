// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import endOfYear from '.'
import moment from 'moment'

suite('endOfYear', function () {
  benchmark('date-fns', function () {
    return endOfYear(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.endOf('year')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
