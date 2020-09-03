// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import closestTo from '.'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'suite'. Do you need to install t... Remove this comment to see the full error message
suite('closestTo', function () {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'benchmark'.
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
