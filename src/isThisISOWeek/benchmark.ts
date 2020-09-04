// @flow
/* eslint-env mocha */

/* global suite, benchmark */

import isThisISOWeek from '.'

suite(
  'isThisISOWeek',
  () => {
    benchmark('date-fns', function() {
      return isThisISOWeek(this.date)
    })
  },
  {
    setup: function() {
      this.date = new Date()
    }
  }
)
