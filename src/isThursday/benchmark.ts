// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isThursday from '.'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'suite'. Do you need to install t... Remove this comment to see the full error message
suite('isThursday', function () {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'benchmark'.
  benchmark('date-fns', function () {
    return isThursday(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
