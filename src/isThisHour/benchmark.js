// @flow
/* eslint-env mocha */

/* global benchmark */

import isThisHour from '.'

suite(
  'isThisHour',
  () => {
    benchmark('date-fns', function () {
      return isThisHour(this.date)
    })
  },
  {
    setup: function () {
      this.date = new Date()
    },
  }
)
