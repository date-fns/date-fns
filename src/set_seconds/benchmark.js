// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import setSeconds from '.'
import moment from 'moment'

suite('setSeconds', function () {
  benchmark('date-fns', function () {
    return setSeconds(this.date, 15)
  })

  benchmark('Moment.js', function () {
    return this.moment.seconds(15)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
