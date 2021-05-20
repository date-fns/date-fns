// @flow
/* eslint-env mocha */
/* global benchmark */

import isPast from '.'

suite(
  'isPast',
  () => {
    benchmark('date-fns', function () {
      return isPast(this.date)
    })
  },
  {
    setup: function () {
      this.date = new Date()
    },
  }
)
