// @flow
/* eslint-env mocha */

/* global suite, benchmark */

import isThisHour from '.'

suite(
  'isThisHour',
  () => {
    benchmark('date-fns', function() {
      return isThisHour(this.date)
    })
  },
  {
    setup: function() {
      this.date = new Date()
    }
  }
)
