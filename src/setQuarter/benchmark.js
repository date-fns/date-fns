// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import setQuarter from '.'
import moment from 'moment'

suite('setQuarter', function () {
  benchmark('date-fns', function () {
    return setQuarter(this.date, 3)
  })

  benchmark('Moment.js', function () {
    return this.moment.quarter(3)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
