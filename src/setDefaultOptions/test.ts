/* eslint-env mocha */

import assert from 'assert'
import setDefaultOptions from '.'
import {
  AllOptions,
  _defaultOptions,
  setDefaultOptions as setInternalDefaultOptions,
} from '../_lib/defaultOptions/index'
import enUS from '../locale/en-US'
import eo from '../locale/eo'
import differenceInCalendarWeeks from '../differenceInCalendarWeeks'
import eachWeekOfInterval from '../eachWeekOfInterval'
import endOfWeek from '../endOfWeek'
import format from '../format'
import formatDistance from '../formatDistance'
import formatDistanceStrict from '../formatDistanceStrict'
import formatDuration from '../formatDuration'
import formatRelative from '../formatRelative'
import getWeek from '../getWeek'
import getWeekOfMonth from '../getWeekOfMonth'
import getWeeksInMonth from '../getWeeksInMonth'
import getWeekYear from '../getWeekYear'
import isMatch from '../isMatch'
import isSameWeek from '../isSameWeek'
import lastDayOfWeek from '../lastDayOfWeek'
import parse from '../parse'
import setDay from '../setDay'
import setWeek from '../setWeek'
import setWeekYear from '../setWeekYear'
import startOfWeek from '../startOfWeek'
import startOfWeekYear from '../startOfWeekYear'

describe('setDefaultOptions', () => {
  afterEach(() => {
    setInternalDefaultOptions({
      weekStartsOn: 0,
      firstWeekContainsDate: 1,
    })
  })

  it('changes the internal `defaultOptions` object', () => {
    setDefaultOptions({ weekStartsOn: 1, firstWeekContainsDate: 4, locale: eo })
    assert.deepStrictEqual(_defaultOptions, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: eo,
    })
  })

  it('allows partial set', () => {
    setDefaultOptions({ weekStartsOn: 1 })
    assert.deepStrictEqual(_defaultOptions, {
      weekStartsOn: 1,
      firstWeekContainsDate: 1,
    })
  })

  it('does not mutate the argument', () => {
    const argument: AllOptions = { weekStartsOn: 1 }
    setDefaultOptions(argument)
    assert.deepStrictEqual(argument, { weekStartsOn: 1 })
  })

  describe('locale', () => {
    it('affects the result of functions that use `locale`', () => {
      setDefaultOptions({ locale: eo })

      // format
      assert.deepStrictEqual(
        format(new Date(2014, 0, 1), 'PPPpp'),
        '2014-januaro-01 00:00:00'
      )

      // formatDistance
      assert.deepStrictEqual(
        formatDistance(new Date(2014, 0, 1), new Date(2015, 0, 1)),
        'proksimume 1 jaro'
      )

      // formatDistanceStrict
      assert.deepStrictEqual(
        formatDistanceStrict(new Date(2014, 0, 1), new Date(2015, 0, 1)),
        '1 jaro'
      )

      // formatDuration
      assert.deepStrictEqual(formatDuration({ years: 1 }), '1 jaro')

      // formatRelative
      assert.deepStrictEqual(
        formatRelative(new Date(2014, 0, 1), new Date(2014, 0, 2)),
        'hieraŭ je 00:00'
      )

      // isMatch
      assert(isMatch('2014-januaro-01 00:00:00', 'PPPpp'))

      // parse
      assert.deepStrictEqual(
        parse('2014-januaro-01 00:00:00', 'PPPpp', new Date()),
        new Date(2014, 0, 1)
      )
    })

    it('for reference: not setting any options', () => {
      // format
      assert.deepStrictEqual(
        format(new Date(2014, 0, 1), 'PPPpp'),
        'January 1st, 2014 at 12:00:00 AM'
      )

      // formatDistance
      assert.deepStrictEqual(
        formatDistance(new Date(2014, 0, 1), new Date(2015, 0, 1)),
        'about 1 year'
      )

      // formatDistanceStrict
      assert.deepStrictEqual(
        formatDistanceStrict(new Date(2014, 0, 1), new Date(2015, 0, 1)),
        '1 year'
      )

      // formatDuration
      assert.deepStrictEqual(formatDuration({ years: 1 }), '1 year')

      // formatRelative
      assert.deepStrictEqual(
        formatRelative(new Date(2014, 0, 1), new Date(2014, 0, 2)),
        'yesterday at 12:00 AM'
      )

      // isMatch
      assert(isMatch('January 1st, 2014 at 12:00:00 AM', 'PPPpp'))

      // parse
      assert.deepStrictEqual(
        parse('January 1st, 2014 at 12:00:00 AM', 'PPPpp', new Date()),
        new Date(2014, 0, 1)
      )
    })

    it('manually set `locale` take priority over `defaultOptions.locale`', () => {
      setDefaultOptions({ locale: eo })

      // format
      assert.deepStrictEqual(
        format(new Date(2014, 0, 1), 'PPPpp', { locale: enUS }),
        'January 1st, 2014 at 12:00:00 AM'
      )

      // formatDistance
      assert.deepStrictEqual(
        formatDistance(new Date(2014, 0, 1), new Date(2015, 0, 1), {
          locale: enUS,
        }),
        'about 1 year'
      )

      // formatDistanceStrict
      assert.deepStrictEqual(
        formatDistanceStrict(new Date(2014, 0, 1), new Date(2015, 0, 1), {
          locale: enUS,
        }),
        '1 year'
      )

      // formatDuration
      assert.deepStrictEqual(
        formatDuration({ years: 1 }, { locale: enUS }),
        '1 year'
      )

      // formatRelative
      assert.deepStrictEqual(
        formatRelative(new Date(2014, 0, 1), new Date(2014, 0, 2), {
          locale: enUS,
        }),
        'yesterday at 12:00 AM'
      )

      // isMatch
      assert(
        isMatch('January 1st, 2014 at 12:00:00 AM', 'PPPpp', { locale: enUS })
      )

      // parse
      assert.deepStrictEqual(
        parse('January 1st, 2014 at 12:00:00 AM', 'PPPpp', new Date(), {
          locale: enUS,
        }),
        new Date(2014, 0, 1)
      )
    })
  })

  describe('weekStartsOn', () => {
    it('affects the result of functions that use `weekStartsOn`', () => {
      setDefaultOptions({ weekStartsOn: 1 })

      // differenceInCalendarWeeks
      assert.strictEqual(
        differenceInCalendarWeeks(
          new Date(2014, 6 /* Jul */, 8, 18, 0),
          new Date(2014, 5 /* Jun */, 29, 6, 0)
        ),
        2
      )

      // eachWeekOfInterval
      assert.deepStrictEqual(
        eachWeekOfInterval({
          start: new Date(2014, 9 /* Oct */, 6, 6, 35),
          end: new Date(2014, 10 /* Nov */, 25, 22, 15),
        }),
        [
          new Date(2014, 9 /* Oct */, 6),
          new Date(2014, 9 /* Oct */, 13),
          new Date(2014, 9 /* Oct */, 20),
          new Date(2014, 9 /* Oct */, 27),
          new Date(2014, 10 /* Nov */, 3),
          new Date(2014, 10 /* Nov */, 10),
          new Date(2014, 10 /* Nov */, 17),
          new Date(2014, 10 /* Nov */, 24),
        ]
      )

      // endOfWeek
      assert.deepStrictEqual(
        endOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0)),
        new Date(2014, 8 /* Sep */, 7, 23, 59, 59, 999)
      )

      // getWeekOfMonth
      assert.strictEqual(getWeekOfMonth(new Date(2017, 9 /* Oct */, 31)), 6)

      // getWeeksInMonth
      assert.strictEqual(
        getWeeksInMonth(new Date(2015, 1 /* Feb */, 8, 18, 0)),
        5
      )

      // isSameWeek
      assert.strictEqual(
        isSameWeek(
          new Date(2014, 7 /* Aug */, 31),
          new Date(2014, 8 /* Sep */, 4)
        ),
        false
      )

      // lastDayOfWeek
      assert.deepStrictEqual(
        lastDayOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0)),
        new Date(2014, 8 /* Sep */, 7)
      )

      // setDay
      assert.deepStrictEqual(
        setDay(new Date(2014, 8 /* Sep */, 1), 0),
        new Date(2014, 8 /* Sep */, 7)
      )

      // startOfWeek
      assert.deepStrictEqual(
        startOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0)),
        new Date(2014, 8 /* Sep */, 1)
      )
    })

    it('for reference: not setting any options', () => {
      // differenceInCalendarWeeks
      assert.strictEqual(
        differenceInCalendarWeeks(
          new Date(2014, 6 /* Jul */, 8, 18, 0),
          new Date(2014, 5 /* Jun */, 29, 6, 0)
        ),
        1
      )

      // eachWeekOfInterval
      assert.deepStrictEqual(
        eachWeekOfInterval({
          start: new Date(2014, 9 /* Oct */, 6),
          end: new Date(2014, 10 /* Nov */, 23),
        }),
        [
          new Date(2014, 9 /* Oct */, 5),
          new Date(2014, 9 /* Oct */, 12),
          new Date(2014, 9 /* Oct */, 19),
          new Date(2014, 9 /* Oct */, 26),
          new Date(2014, 10 /* Nov */, 2),
          new Date(2014, 10 /* Nov */, 9),
          new Date(2014, 10 /* Nov */, 16),
          new Date(2014, 10 /* Nov */, 23),
        ]
      )

      // endOfWeek
      assert.deepStrictEqual(
        endOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0)),
        new Date(2014, 8 /* Sep */, 6, 23, 59, 59, 999)
      )

      // getWeekOfMonth
      assert.strictEqual(getWeekOfMonth(new Date(2017, 10 /* Nov */, 15)), 3)

      // getWeeksInMonth
      assert.strictEqual(
        getWeeksInMonth(new Date(2015, 1 /* Feb */, 8, 18, 0)),
        4
      )

      // isSameWeek
      assert.strictEqual(
        isSameWeek(
          new Date(2014, 7 /* Aug */, 31),
          new Date(2014, 8 /* Sep */, 4)
        ),
        true
      )

      // lastDayOfWeek
      assert.deepStrictEqual(
        lastDayOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0)),
        new Date(2014, 8 /* Sep */, 6)
      )

      // setDay
      assert.deepStrictEqual(
        setDay(new Date(2014, 8 /* Sep */, 1), 0),
        new Date(2014, 7 /* Aug */, 31)
      )

      // startOfWeek
      assert.deepStrictEqual(
        startOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0)),
        new Date(2014, 7 /* Aug */, 31)
      )
    })

    it('manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`', () => {
      setDefaultOptions({ weekStartsOn: 1 })

      // differenceInCalendarWeeks
      assert.strictEqual(
        differenceInCalendarWeeks(
          new Date(2014, 6 /* Jul */, 8, 18, 0),
          new Date(2014, 5 /* Jun */, 29, 6, 0),
          {
            weekStartsOn: 0,
          }
        ),
        1
      )

      // eachWeekOfInterval
      assert.deepStrictEqual(
        eachWeekOfInterval(
          {
            start: new Date(2014, 9 /* Oct */, 6),
            end: new Date(2014, 10 /* Nov */, 23),
          },
          {
            weekStartsOn: 0,
          }
        ),
        [
          new Date(2014, 9 /* Oct */, 5),
          new Date(2014, 9 /* Oct */, 12),
          new Date(2014, 9 /* Oct */, 19),
          new Date(2014, 9 /* Oct */, 26),
          new Date(2014, 10 /* Nov */, 2),
          new Date(2014, 10 /* Nov */, 9),
          new Date(2014, 10 /* Nov */, 16),
          new Date(2014, 10 /* Nov */, 23),
        ]
      )

      // endOfWeek
      assert.deepStrictEqual(
        endOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0), {
          weekStartsOn: 0,
        }),
        new Date(2014, 8 /* Sep */, 6, 23, 59, 59, 999)
      )

      // getWeekOfMonth
      assert.strictEqual(
        getWeekOfMonth(new Date(2017, 10 /* Nov */, 15), {
          weekStartsOn: 0,
        }),
        3
      )

      // getWeeksInMonth
      assert.strictEqual(
        getWeeksInMonth(new Date(2015, 1 /* Feb */, 8, 18, 0), {
          weekStartsOn: 0,
        }),
        4
      )

      // isSameWeek
      assert.strictEqual(
        isSameWeek(
          new Date(2014, 7 /* Aug */, 31),
          new Date(2014, 8 /* Sep */, 4),
          {
            weekStartsOn: 0,
          }
        ),
        true
      )

      // lastDayOfWeek
      assert.deepStrictEqual(
        lastDayOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0), {
          weekStartsOn: 0,
        }),
        new Date(2014, 8 /* Sep */, 6)
      )

      // setDay
      assert.deepStrictEqual(
        setDay(new Date(2014, 8 /* Sep */, 1), 0, {
          weekStartsOn: 0,
        }),
        new Date(2014, 7 /* Aug */, 31)
      )

      // startOfWeek
      assert.deepStrictEqual(
        startOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0), {
          weekStartsOn: 0,
        }),
        new Date(2014, 7 /* Aug */, 31)
      )
    })
  })

  describe('firstWeekContainsDate', () => {
    it('affects the result of functions that use `firstWeekContainsDate`', () => {
      setDefaultOptions({ weekStartsOn: 1, firstWeekContainsDate: 4 })

      // format
      assert.strictEqual(
        format(new Date(1986, 3 /* Apr */, 6), 'w wo ww'),
        '14 14th 14'
      )

      // getWeek
      assert.strictEqual(getWeek(new Date(2005, 0 /* Jan */, 2)), 53)

      // getWeekYear
      assert.strictEqual(getWeekYear(new Date(2004, 11 /* Dec */, 26)), 2004)

      // parse
      const referenceDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)
      assert.deepStrictEqual(
        parse('2018', 'Y', referenceDate),
        new Date(2018, 0 /* Jan */, 1)
      )

      // setWeek
      assert.deepStrictEqual(
        setWeek(new Date(2005, 0 /* Jan */, 2), 1),
        new Date(2004, 0 /* Jan */, 4)
      )

      // setWeekYear
      assert.deepStrictEqual(
        setWeekYear(new Date(2010, 0 /* Jan */, 2), 2004),
        new Date(2005, 0 /* Jan */, 1)
      )

      // startOfWeekYear
      assert.deepStrictEqual(
        startOfWeekYear(new Date(2005, 6 /* Jul */, 2)),
        new Date(2005, 0 /* Jan */, 3, 0, 0, 0, 0)
      )
    })

    it('for reference: not setting any options', () => {
      // format
      assert.strictEqual(
        format(new Date(1986, 3 /* Apr */, 6), 'w wo ww'),
        '15 15th 15'
      )

      // getWeek
      assert.strictEqual(getWeek(new Date(2005, 0 /* Jan */, 2)), 2)

      // getWeekYear
      assert.strictEqual(getWeekYear(new Date(2004, 11 /* Dec */, 26)), 2005)

      // parse
      const referenceDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)
      assert.deepStrictEqual(
        parse('2018', 'Y', referenceDate),
        new Date(2017, 11 /* Dec */, 31)
      )

      // setWeek
      assert.deepStrictEqual(
        setWeek(new Date(2005, 0 /* Jan */, 2), 1),
        new Date(2004, 11 /* Dec */, 26)
      )

      // setWeekYear
      assert.deepStrictEqual(
        setWeekYear(new Date(2010, 0 /* Jan */, 2), 2004),
        new Date(2004, 0 /* Jan */, 3)
      )

      // startOfWeekYear
      assert.deepStrictEqual(
        startOfWeekYear(new Date(2005, 6 /* Jul */, 2)),
        new Date(2004, 11 /* Dec */, 26, 0, 0, 0, 0)
      )
    })

    it('manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`', () => {
      setDefaultOptions({ weekStartsOn: 1, firstWeekContainsDate: 4 })

      // format
      assert.strictEqual(
        format(new Date(1986, 3 /* Apr */, 6), 'w wo ww', {
          weekStartsOn: 0,
          firstWeekContainsDate: 1,
        }),
        '15 15th 15'
      )

      // getWeek
      assert.strictEqual(
        getWeek(new Date(2005, 0 /* Jan */, 2), {
          weekStartsOn: 0,
          firstWeekContainsDate: 1,
        }),
        2
      )

      // getWeekYear
      assert.strictEqual(
        getWeekYear(new Date(2004, 11 /* Dec */, 26), {
          weekStartsOn: 0,
          firstWeekContainsDate: 1,
        }),
        2005
      )

      // parse
      const referenceDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)
      assert.deepStrictEqual(
        parse('2018', 'Y', referenceDate, {
          weekStartsOn: 0,
          firstWeekContainsDate: 1,
        }),
        new Date(2017, 11 /* Dec */, 31)
      )

      // setWeek
      assert.deepStrictEqual(
        setWeek(new Date(2005, 0 /* Jan */, 2), 1, {
          weekStartsOn: 0,
          firstWeekContainsDate: 1,
        }),
        new Date(2004, 11 /* Dec */, 26)
      )

      // setWeekYear
      assert.deepStrictEqual(
        setWeekYear(new Date(2010, 0 /* Jan */, 2), 2004, {
          weekStartsOn: 0,
          firstWeekContainsDate: 1,
        }),
        new Date(2004, 0 /* Jan */, 3)
      )

      // startOfWeekYear
      assert.deepStrictEqual(
        startOfWeekYear(new Date(2005, 6 /* Jul */, 2), {
          weekStartsOn: 0,
          firstWeekContainsDate: 1,
        }),
        new Date(2004, 11 /* Dec */, 26, 0, 0, 0, 0)
      )
    })
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(setDefaultOptions.bind(null), TypeError)
  })
})
