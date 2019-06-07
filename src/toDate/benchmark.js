// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import toDate from '.'
import moment from 'moment'

suite('toDate', function() {
  benchmark('date-fns', function() {
    return toDate(539980200000)
  })

  benchmark('Moment.js', function() {
    return moment(539980200000)
  })
})
