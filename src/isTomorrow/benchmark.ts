// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isTomorrow from '.'

suite(
  'isTomorrow',
  () => {
    benchmark('date-fns', function() {
      return isTomorrow(this.date)
    })
  },
  {
    setup: function() {
      this.date = new Date()
    }
  }
)
