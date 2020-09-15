// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import parseISODuration from '.'
import moment from 'moment'

suite('parseISODuration', function() {
  benchmark('date-fns', function() {
    return parseISODuration('P2.2Y3.3M4.4DT5.5H6.6M7.7S')
  })

  benchmark('Moment.js', function() {
    return moment.duration('P2.2Y3.3M4.4DT5.5H6.6M7.7S')
  })
})
