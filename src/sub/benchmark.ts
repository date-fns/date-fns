// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import sub from '.'
// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/opudalo/playground/opudalo/date-fn... Remove this comment to see the full error message
import moment from 'moment'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'suite'. Do you need to install t... Remove this comment to see the full error message
suite(
  'add',
  function() {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'benchmark'.
    benchmark('date-fns', function() {
      return sub(this.date, { hours: 5, minutes: 10 })
    })

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'benchmark'.
    benchmark('Moment.js', function() {
      return this.moment.subtract({ hours: 5, minutes: 10 })
    })
  },
  {
    setup: function() {
      this.date = new Date()
      this.moment = moment()
    }
  }
)
