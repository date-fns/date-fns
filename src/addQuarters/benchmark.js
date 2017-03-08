// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import addQuarters from '.'
import moment from 'moment'

suite('addQuarters', function () {
  benchmark('date-fns', function () {
    return addQuarters(this.date, 2)
  })

  benchmark('Moment.js', function () {
    return this.moment.add(2, 'quarters')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
