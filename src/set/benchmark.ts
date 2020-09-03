// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import set from '.'
// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/opudalo/playground/opudalo/date-fn... Remove this comment to see the full error message
import moment from 'moment'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'suite'. Do you need to install t... Remove this comment to see the full error message
suite(
  'set',
  function() {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'benchmark'.
    benchmark('date-fns', function() {
      return set(this.date, { year: 2014, month: 8 })
    })

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'benchmark'.
    benchmark('Moment.js', function() {
      return this.moment.set({ year: 2014, month: 3 })
    })
  },
  {
    setup: function() {
      this.date = new Date(2013, 7)
      this.moment = moment()
    }
  }
)
