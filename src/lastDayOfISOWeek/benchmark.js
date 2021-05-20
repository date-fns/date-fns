// @flow
/* eslint-env mocha */
/* global benchmark */

import lastDayOfISOWeek from '.'

suite(
  'lastDayOfISOWeek',
  function () {
    benchmark('date-fns', function () {
      return lastDayOfISOWeek(this.date)
    })
  },
  {
    setup: function () {
      this.date = new Date()
    },
  }
)
