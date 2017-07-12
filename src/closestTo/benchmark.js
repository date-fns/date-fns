// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import closestTo from '.'

suite('closestTo', function () {
  benchmark('date-fns', function () {
    return closestTo(this.date, this.array)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.array = [
      new Date(this.date.getTime() + 604800001),
      new Date(this.date.getTime() - 604800000)
    ]
  }
})
