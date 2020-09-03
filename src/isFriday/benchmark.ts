// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isFriday from '.'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'suite'. Do you need to install t... Remove this comment to see the full error message
suite('isFriday', function () {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'benchmark'.
  benchmark('date-fns', function () {
    return isFriday(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
