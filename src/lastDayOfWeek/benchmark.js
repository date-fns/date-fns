// @flow
/* eslint-env mocha */
/* global benchmark */

import lastDayOfWeek from '.'

suite(
  'lastDayOfWeek',
  function () {
    benchmark('date-fns', function () {
      return lastDayOfWeek(this.date)
    })
  },
  {
    setup: function () {
      this.date = new Date()
    },
  }
)
