// @flow
/* eslint-env mocha */

/* global benchmark */

import isThisQuarter from '.'

suite(
  'isThisQuarter',
  () => {
    benchmark('date-fns', function () {
      return isThisQuarter(this.date)
    })
  },
  {
    setup: function () {
      this.date = new Date()
    },
  }
)
