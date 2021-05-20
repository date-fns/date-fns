// @flow
/* eslint-env mocha */
/* global benchmark */

import subISOWeekYears from '.'

suite(
  'subISOWeekYears',
  function () {
    benchmark('date-fns', function () {
      return subISOWeekYears(this.date, 7)
    })
  },
  {
    setup: function () {
      this.date = new Date()
    },
  }
)
