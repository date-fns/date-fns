// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isValid from '.'
// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/opudalo/playground/opudalo/date-fn... Remove this comment to see the full error message
import moment from 'moment'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'suite'. Do you need to install t... Remove this comment to see the full error message
suite('isValid', function () {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'benchmark'.
  benchmark('date-fns', function () {
    return isValid(this.invalidDate)
  })

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'benchmark'.
  benchmark('Moment.js', function () {
    return this.invalidMoment.isValid()
  })
}, {
  setup: function () {
    this.invalidDate = new Date(NaN)
    this.invalidMoment = moment(new Date(NaN))
  }
})
