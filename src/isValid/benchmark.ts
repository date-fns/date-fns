// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isValid from '.'
import moment from 'moment'

suite('isValid', function () {
  benchmark('date-fns', function () {
    return isValid(this.invalidDate)
  })

  benchmark('Moment.js', function () {
    return this.invalidMoment.isValid()
  })
}, {
  setup: function () {
    this.invalidDate = new Date(NaN)
    this.invalidMoment = moment(new Date(NaN))
  }
})
