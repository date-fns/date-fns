/* eslint-env mocha */

import assert from 'assert'
import setDefaultOptions from '.'
import { AllOptions, _defaultOptions } from '../_lib/defaultOptions/index'
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
import eachDayOfInterval from '../eachDayOfInterval'
import eachHourOfInterval from '../eachHourOfInterval'
import eachMinuteOfInterval from '../eachMinuteOfInterval'
import differenceInHours from '../differenceInHours'
import differenceInMinutes from '../differenceInMinutes'
import differenceInQuarters from '../differenceInQuarters'
import differenceInSeconds from '../differenceInSeconds'
import differenceInWeeks from '../differenceInWeeks'
import areIntervalsOverlapping from '../areIntervalsOverlapping'
import formatISO from '../formatISO'
import formatISO9075 from '../formatISO9075'
import formatRFC3339 from '../formatRFC3339'
import parseISO from '../parseISO'
import roundToNearestMinutes from '../roundToNearestMinutes'
import { resetDefaultOptions } from '../_lib/test'
import { generateOffset } from '../formatISO/test'

describe('setDefaultOptions', () => {
  afterEach(resetDefaultOptions)

  it('changes the internal `defaultOptions` object', () => {
    setDefaultOptions({ weekStartsOn: 1, firstWeekContainsDate: 4, locale: eo })
    assert.deepStrictEqual(_defaultOptions, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: eo,
    })
  })

  it('merges with previous `defaultOptions` calls', () => {
    setDefaultOptions({ weekStartsOn: 1 })
    setDefaultOptions({ firstWeekContainsDate: 4 })
    setDefaultOptions({ locale: eo })
    assert.deepStrictEqual(_defaultOptions, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: eo,
    })
  })

  it('setting an option to `undefined` deletes it', () => {
    setDefaultOptions({ weekStartsOn: 1, firstWeekContainsDate: 4 })
    setDefaultOptions({ weekStartsOn: undefined })
    assert.deepStrictEqual(_defaultOptions, {
      firstWeekContainsDate: 4,
    })
  })

  it('does not mutate the argument', () => {
    const argument: AllOptions = { weekStartsOn: 1 }
    setDefaultOptions(argument)
    assert.deepStrictEqual(argument, { weekStartsOn: 1 })
  })

  describe('locale', () => {
    it('format', () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        format(new Date(2014, 0, 1), 'PPPpp'),
        'January 1st, 2014 at 12:00:00 AM'
      )

      setDefaultOptions({ locale: eo })

      assert.deepStrictEqual(
        format(new Date(2014, 0, 1), 'PPPpp'),
        '2014-januaro-01 00:00:00'
      )

      // Manually set `locale` take priority over `defaultOptions.locale`
      assert.deepStrictEqual(
        format(new Date(2014, 0, 1), 'PPPpp', { locale: enUS }),
        'January 1st, 2014 at 12:00:00 AM'
      )
    })

    it('formatDistance', () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        formatDistance(new Date(2014, 0, 1), new Date(2015, 0, 1)),
        'about 1 year'
      )

      setDefaultOptions({ locale: eo })

      assert.deepStrictEqual(
        formatDistance(new Date(2014, 0, 1), new Date(2015, 0, 1)),
        'proksimume 1 jaro'
      )

      // Manually set `locale` take priority over `defaultOptions.locale`
      assert.deepStrictEqual(
        formatDistance(new Date(2014, 0, 1), new Date(2015, 0, 1), {
          locale: enUS,
        }),
        'about 1 year'
      )
    })

    it('formatDistanceStrict', () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        formatDistanceStrict(new Date(2014, 0, 1), new Date(2015, 0, 1)),
        '1 year'
      )

      setDefaultOptions({ locale: eo })

      assert.deepStrictEqual(
        formatDistanceStrict(new Date(2014, 0, 1), new Date(2015, 0, 1)),
        '1 jaro'
      )

      // Manually set `locale` take priority over `defaultOptions.locale`
      assert.deepStrictEqual(
        formatDistanceStrict(new Date(2014, 0, 1), new Date(2015, 0, 1), {
          locale: enUS,
        }),
        '1 year'
      )
    })

    it('formatDuration', () => {
      // For reference: not setting any options
      assert.deepStrictEqual(formatDuration({ years: 1 }), '1 year')

      setDefaultOptions({ locale: eo })

      assert.deepStrictEqual(formatDuration({ years: 1 }), '1 jaro')

      // Manually set `locale` take priority over `defaultOptions.locale`
      assert.deepStrictEqual(
        formatDuration({ years: 1 }, { locale: enUS }),
        '1 year'
      )
    })

    it('formatRelative', () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        formatRelative(new Date(2014, 0, 1), new Date(2014, 0, 2)),
        'yesterday at 12:00 AM'
      )

      setDefaultOptions({ locale: eo })

      assert.deepStrictEqual(
        formatRelative(new Date(2014, 0, 1), new Date(2014, 0, 2)),
        'hieraŭ je 00:00'
      )

      // Manually set `locale` take priority over `defaultOptions.locale`
      assert.deepStrictEqual(
        formatRelative(new Date(2014, 0, 1), new Date(2014, 0, 2), {
          locale: enUS,
        }),
        'yesterday at 12:00 AM'
      )
    })

    it('isMatch', () => {
      // For reference: not setting any options
      assert(isMatch('January 1st, 2014 at 12:00:00 AM', 'PPPpp'))

      setDefaultOptions({ locale: eo })

      assert(isMatch('2014-januaro-01 00:00:00', 'PPPpp'))

      // Manually set `locale` take priority over `defaultOptions.locale`
      assert(
        isMatch('January 1st, 2014 at 12:00:00 AM', 'PPPpp', { locale: enUS })
      )
    })

    it('parse', () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        parse('January 1st, 2014 at 12:00:00 AM', 'PPPpp', new Date()),
        new Date(2014, 0, 1)
      )

      setDefaultOptions({ locale: eo })

      assert.deepStrictEqual(
        parse('2014-januaro-01 00:00:00', 'PPPpp', new Date()),
        new Date(2014, 0, 1)
      )

      // Manually set `locale` take priority over `defaultOptions.locale`
      assert.deepStrictEqual(
        parse('January 1st, 2014 at 12:00:00 AM', 'PPPpp', new Date(), {
          locale: enUS,
        }),
        new Date(2014, 0, 1)
      )
    })
  })

  describe('weekStartsOn', () => {
    it('differenceInCalendarWeeks', () => {
      // For reference: not setting any options
      assert.strictEqual(
        differenceInCalendarWeeks(
          new Date(2014, 6 /* Jul */, 8, 18, 0),
          new Date(2014, 5 /* Jun */, 29, 6, 0)
        ),
        1
      )

      setDefaultOptions({ weekStartsOn: 1 })

      assert.strictEqual(
        differenceInCalendarWeeks(
          new Date(2014, 6 /* Jul */, 8, 18, 0),
          new Date(2014, 5 /* Jun */, 29, 6, 0)
        ),
        2
      )

      // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
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
    })

    it('eachWeekOfInterval', () => {
      // For reference: not setting any options
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

      setDefaultOptions({ weekStartsOn: 1 })

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

      // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
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
    })

    it('endOfWeek', () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        endOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0)),
        new Date(2014, 8 /* Sep */, 6, 23, 59, 59, 999)
      )

      setDefaultOptions({ weekStartsOn: 1 })

      assert.deepStrictEqual(
        endOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0)),
        new Date(2014, 8 /* Sep */, 7, 23, 59, 59, 999)
      )

      // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
      assert.deepStrictEqual(
        endOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0), {
          weekStartsOn: 0,
        }),
        new Date(2014, 8 /* Sep */, 6, 23, 59, 59, 999)
      )
    })

    it('getWeekOfMonth', () => {
      // For reference: not setting any options
      assert.strictEqual(getWeekOfMonth(new Date(2017, 10 /* Nov */, 15)), 3)

      setDefaultOptions({ weekStartsOn: 1 })

      assert.strictEqual(getWeekOfMonth(new Date(2017, 9 /* Oct */, 31)), 6)

      // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
      assert.strictEqual(
        getWeekOfMonth(new Date(2017, 10 /* Nov */, 15), {
          weekStartsOn: 0,
        }),
        3
      )
    })

    it('getWeeksInMonth', () => {
      // For reference: not setting any options
      assert.strictEqual(
        getWeeksInMonth(new Date(2015, 1 /* Feb */, 8, 18, 0)),
        4
      )

      setDefaultOptions({ weekStartsOn: 1 })

      assert.strictEqual(
        getWeeksInMonth(new Date(2015, 1 /* Feb */, 8, 18, 0)),
        5
      )

      // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
      assert.strictEqual(
        getWeeksInMonth(new Date(2015, 1 /* Feb */, 8, 18, 0), {
          weekStartsOn: 0,
        }),
        4
      )
    })

    it('isSameWeek', () => {
      // For reference: not setting any options
      assert.strictEqual(
        isSameWeek(
          new Date(2014, 7 /* Aug */, 31),
          new Date(2014, 8 /* Sep */, 4)
        ),
        true
      )

      setDefaultOptions({ weekStartsOn: 1 })

      assert.strictEqual(
        isSameWeek(
          new Date(2014, 7 /* Aug */, 31),
          new Date(2014, 8 /* Sep */, 4)
        ),
        false
      )

      // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
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
    })

    it('lastDayOfWeek', () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        lastDayOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0)),
        new Date(2014, 8 /* Sep */, 6)
      )

      setDefaultOptions({ weekStartsOn: 1 })

      assert.deepStrictEqual(
        lastDayOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0)),
        new Date(2014, 8 /* Sep */, 7)
      )

      // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
      assert.deepStrictEqual(
        lastDayOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0), {
          weekStartsOn: 0,
        }),
        new Date(2014, 8 /* Sep */, 6)
      )
    })

    it('setDay', () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        setDay(new Date(2014, 8 /* Sep */, 1), 0),
        new Date(2014, 7 /* Aug */, 31)
      )

      setDefaultOptions({ weekStartsOn: 1 })

      assert.deepStrictEqual(
        setDay(new Date(2014, 8 /* Sep */, 1), 0),
        new Date(2014, 8 /* Sep */, 7)
      )

      // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
      assert.deepStrictEqual(
        setDay(new Date(2014, 8 /* Sep */, 1), 0, {
          weekStartsOn: 0,
        }),
        new Date(2014, 7 /* Aug */, 31)
      )
    })

    it('startOfWeek', () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        startOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0)),
        new Date(2014, 7 /* Aug */, 31)
      )

      setDefaultOptions({ weekStartsOn: 1 })

      assert.deepStrictEqual(
        startOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0)),
        new Date(2014, 8 /* Sep */, 1)
      )

      // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
      assert.deepStrictEqual(
        startOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0), {
          weekStartsOn: 0,
        }),
        new Date(2014, 7 /* Aug */, 31)
      )
    })
  })

  describe('firstWeekContainsDate', () => {
    it('format', () => {
      // For reference: not setting any options
      assert.strictEqual(
        format(new Date(1986, 3 /* Apr */, 6), 'w wo ww'),
        '15 15th 15'
      )

      setDefaultOptions({ weekStartsOn: 1, firstWeekContainsDate: 4 })

      assert.strictEqual(
        format(new Date(1986, 3 /* Apr */, 6), 'w wo ww'),
        '14 14th 14'
      )

      // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`
      assert.strictEqual(
        format(new Date(1986, 3 /* Apr */, 6), 'w wo ww', {
          weekStartsOn: 0,
          firstWeekContainsDate: 1,
        }),
        '15 15th 15'
      )
    })

    it('getWeek', () => {
      // For reference: not setting any options
      assert.strictEqual(getWeek(new Date(2005, 0 /* Jan */, 2)), 2)

      setDefaultOptions({ weekStartsOn: 1, firstWeekContainsDate: 4 })

      assert.strictEqual(getWeek(new Date(2005, 0 /* Jan */, 2)), 53)

      // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`
      assert.strictEqual(
        getWeek(new Date(2005, 0 /* Jan */, 2), {
          weekStartsOn: 0,
          firstWeekContainsDate: 1,
        }),
        2
      )
    })

    it('getWeekYear', () => {
      // For reference: not setting any options
      assert.strictEqual(getWeekYear(new Date(2004, 11 /* Dec */, 26)), 2005)

      setDefaultOptions({ weekStartsOn: 1, firstWeekContainsDate: 4 })

      assert.strictEqual(getWeekYear(new Date(2004, 11 /* Dec */, 26)), 2004)

      // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`
      assert.strictEqual(
        getWeekYear(new Date(2004, 11 /* Dec */, 26), {
          weekStartsOn: 0,
          firstWeekContainsDate: 1,
        }),
        2005
      )
    })

    it('parse', () => {
      const referenceDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)
      // For reference: not setting any options
      assert.deepStrictEqual(
        parse('2018', 'Y', referenceDate),
        new Date(2017, 11 /* Dec */, 31)
      )

      setDefaultOptions({ weekStartsOn: 1, firstWeekContainsDate: 4 })

      assert.deepStrictEqual(
        parse('2018', 'Y', referenceDate),
        new Date(2018, 0 /* Jan */, 1)
      )

      // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`
      assert.deepStrictEqual(
        parse('2018', 'Y', referenceDate, {
          weekStartsOn: 0,
          firstWeekContainsDate: 1,
        }),
        new Date(2017, 11 /* Dec */, 31)
      )
    })

    it('setWeek', () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        setWeek(new Date(2005, 0 /* Jan */, 2), 1),
        new Date(2004, 11 /* Dec */, 26)
      )

      setDefaultOptions({ weekStartsOn: 1, firstWeekContainsDate: 4 })

      assert.deepStrictEqual(
        setWeek(new Date(2005, 0 /* Jan */, 2), 1),
        new Date(2004, 0 /* Jan */, 4)
      )

      // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`
      assert.deepStrictEqual(
        setWeek(new Date(2005, 0 /* Jan */, 2), 1, {
          weekStartsOn: 0,
          firstWeekContainsDate: 1,
        }),
        new Date(2004, 11 /* Dec */, 26)
      )
    })

    it('setWeekYear', () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        setWeekYear(new Date(2010, 0 /* Jan */, 2), 2004),
        new Date(2004, 0 /* Jan */, 3)
      )

      setDefaultOptions({ weekStartsOn: 1, firstWeekContainsDate: 4 })

      assert.deepStrictEqual(
        setWeekYear(new Date(2010, 0 /* Jan */, 2), 2004),
        new Date(2005, 0 /* Jan */, 1)
      )

      // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`
      assert.deepStrictEqual(
        setWeekYear(new Date(2010, 0 /* Jan */, 2), 2004, {
          weekStartsOn: 0,
          firstWeekContainsDate: 1,
        }),
        new Date(2004, 0 /* Jan */, 3)
      )
    })

    it('startOfWeekYear', () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        startOfWeekYear(new Date(2005, 6 /* Jul */, 2)),
        new Date(2004, 11 /* Dec */, 26, 0, 0, 0, 0)
      )

      setDefaultOptions({ weekStartsOn: 1, firstWeekContainsDate: 4 })

      assert.deepStrictEqual(
        startOfWeekYear(new Date(2005, 6 /* Jul */, 2)),
        new Date(2005, 0 /* Jan */, 3, 0, 0, 0, 0)
      )

      // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`
      assert.deepStrictEqual(
        startOfWeekYear(new Date(2005, 6 /* Jul */, 2), {
          weekStartsOn: 0,
          firstWeekContainsDate: 1,
        }),
        new Date(2004, 11 /* Dec */, 26, 0, 0, 0, 0)
      )
    })
  })

  describe('inclusive', () => {
    it('areIntervalsOverlapping', () => {
      const interval1 = {
        start: new Date(2016, 10, 10, 13, 0, 0),
        end: new Date(2016, 11, 3, 15, 0, 0),
      }
      const interval2 = {
        start: new Date(2016, 11, 3, 15, 0, 0),
        end: new Date(2016, 11, 14, 13, 0, 0),
      }
      // For reference: not setting any options
      assert(!areIntervalsOverlapping(interval1, interval2))

      setDefaultOptions({ inclusive: true })
      assert(areIntervalsOverlapping(interval1, interval2))

      // Manually set `inclusive` take priority over `defaultOptions.inclusive`
      assert(
        !areIntervalsOverlapping(interval1, interval2, {
          inclusive: false,
        })
      )
    })
  })

  describe('step', () => {
    it('eachDayOfInterval', () => {
      const interval = {
        start: new Date(2014, 9 /* Oct */, 6),
        end: new Date(2014, 9 /* Oct */, 13),
      }
      // For reference: not setting any options
      assert.deepStrictEqual(eachDayOfInterval(interval), [
        new Date(2014, 9 /* Oct */, 6),
        new Date(2014, 9 /* Oct */, 7),
        new Date(2014, 9 /* Oct */, 8),
        new Date(2014, 9 /* Oct */, 9),
        new Date(2014, 9 /* Oct */, 10),
        new Date(2014, 9 /* Oct */, 11),
        new Date(2014, 9 /* Oct */, 12),
        new Date(2014, 9 /* Oct */, 13),
      ])

      setDefaultOptions({ step: 3 })

      assert.deepStrictEqual(eachDayOfInterval(interval), [
        new Date(2014, 9 /* Oct */, 6),
        new Date(2014, 9 /* Oct */, 9),
        new Date(2014, 9 /* Oct */, 12),
      ])

      // Manually set `step` take priority over `defaultOptions.step`
      assert.deepStrictEqual(eachDayOfInterval(interval, { step: 1 }), [
        new Date(2014, 9 /* Oct */, 6),
        new Date(2014, 9 /* Oct */, 7),
        new Date(2014, 9 /* Oct */, 8),
        new Date(2014, 9 /* Oct */, 9),
        new Date(2014, 9 /* Oct */, 10),
        new Date(2014, 9 /* Oct */, 11),
        new Date(2014, 9 /* Oct */, 12),
        new Date(2014, 9 /* Oct */, 13),
      ])
    })

    it('eachHourOfInterval', () => {
      const interval = {
        start: new Date(2014, 9 /* Oct */, 6, 12),
        end: new Date(2014, 9 /* Oct */, 6, 18),
      }
      // For reference: not setting any options
      assert.deepStrictEqual(eachHourOfInterval(interval), [
        new Date(2014, 9 /* Oct */, 6, 12),
        new Date(2014, 9 /* Oct */, 6, 13),
        new Date(2014, 9 /* Oct */, 6, 14),
        new Date(2014, 9 /* Oct */, 6, 15),
        new Date(2014, 9 /* Oct */, 6, 16),
        new Date(2014, 9 /* Oct */, 6, 17),
        new Date(2014, 9 /* Oct */, 6, 18),
      ])

      setDefaultOptions({ step: 3 })

      assert.deepStrictEqual(eachHourOfInterval(interval), [
        new Date(2014, 9 /* Oct */, 6, 12),
        new Date(2014, 9 /* Oct */, 6, 15),
        new Date(2014, 9 /* Oct */, 6, 18),
      ])

      // Manually set `step` take priority over `defaultOptions.step`
      assert.deepStrictEqual(eachHourOfInterval(interval, { step: 1 }), [
        new Date(2014, 9 /* Oct */, 6, 12),
        new Date(2014, 9 /* Oct */, 6, 13),
        new Date(2014, 9 /* Oct */, 6, 14),
        new Date(2014, 9 /* Oct */, 6, 15),
        new Date(2014, 9 /* Oct */, 6, 16),
        new Date(2014, 9 /* Oct */, 6, 17),
        new Date(2014, 9 /* Oct */, 6, 18),
      ])
    })

    it('eachMinuteOfInterval', () => {
      const interval = {
        start: new Date(2020, 9, 14, 13, 1),
        end: new Date(2020, 9, 14, 13, 7),
      }
      // For reference: not setting any options
      assert.deepStrictEqual(eachMinuteOfInterval(interval), [
        new Date(2020, 9, 14, 13, 1),
        new Date(2020, 9, 14, 13, 2),
        new Date(2020, 9, 14, 13, 3),
        new Date(2020, 9, 14, 13, 4),
        new Date(2020, 9, 14, 13, 5),
        new Date(2020, 9, 14, 13, 6),
        new Date(2020, 9, 14, 13, 7),
      ])

      setDefaultOptions({ step: 3 })

      assert.deepStrictEqual(eachMinuteOfInterval(interval), [
        new Date(2020, 9, 14, 13, 1),
        new Date(2020, 9, 14, 13, 4),
        new Date(2020, 9, 14, 13, 7),
      ])

      // Manually set `step` take priority over `defaultOptions.step`
      assert.deepStrictEqual(eachMinuteOfInterval(interval, { step: 1 }), [
        new Date(2020, 9, 14, 13, 1),
        new Date(2020, 9, 14, 13, 2),
        new Date(2020, 9, 14, 13, 3),
        new Date(2020, 9, 14, 13, 4),
        new Date(2020, 9, 14, 13, 5),
        new Date(2020, 9, 14, 13, 6),
        new Date(2020, 9, 14, 13, 7),
      ])
    })
  })

  describe('useAdditionalWeekYearTokens', () => {
    it('format', () => {
      // For reference: not setting any options
      assert.throws(
        () =>
          format(new Date(1986, 3 /* Apr */, 4, 10, 32, 55, 123), 'YY-MM-dd'),
        RangeError
      )

      setDefaultOptions({ useAdditionalWeekYearTokens: true })

      assert.deepStrictEqual(
        format(new Date(1986, 3 /* Apr */, 4, 10, 32, 55, 123), 'YY-MM-dd'),
        '86-04-04'
      )

      // Manually set `useAdditionalWeekYearTokens` take priority over `defaultOptions.useAdditionalWeekYearTokens`
      assert.throws(
        () =>
          format(new Date(1986, 3 /* Apr */, 4, 10, 32, 55, 123), 'YY-MM-dd', {
            useAdditionalWeekYearTokens: false,
          }),
        RangeError
      )
    })

    it('isMatch', () => {
      // For reference: not setting any options
      assert.throws(() => isMatch('02', 'YY'), RangeError)

      setDefaultOptions({ useAdditionalWeekYearTokens: true })

      assert(isMatch('02', 'YY'))

      // Manually set `useAdditionalWeekYearTokens` take priority over `defaultOptions.useAdditionalWeekYearTokens`
      assert.throws(
        () =>
          isMatch('02', 'YY', {
            useAdditionalWeekYearTokens: false,
          }),
        RangeError
      )
    })

    it('parse', () => {
      const referenceDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)
      // For reference: not setting any options
      assert.throws(() => parse('02', 'YY', referenceDate), RangeError)

      setDefaultOptions({ useAdditionalWeekYearTokens: true })

      assert.deepStrictEqual(
        parse('02', 'YY', referenceDate),
        new Date(2001, 11 /* Dec */, 30)
      )

      // Manually set `useAdditionalWeekYearTokens` take priority over `defaultOptions.useAdditionalWeekYearTokens`
      assert.throws(
        () =>
          parse('02', 'YY', referenceDate, {
            useAdditionalWeekYearTokens: false,
          }),
        RangeError
      )
    })
  })

  describe('useAdditionalDayOfYearTokens', () => {
    it('format', () => {
      // For reference: not setting any options
      assert.throws(
        () =>
          format(new Date(1986, 3 /* Apr */, 4, 10, 32, 55, 123), 'yyyy-MM-D'),
        RangeError
      )

      setDefaultOptions({ useAdditionalDayOfYearTokens: true })

      assert.deepStrictEqual(
        format(new Date(1986, 3 /* Apr */, 4, 10, 32, 55, 123), 'yyyy-MM-D'),
        '1986-04-94'
      )

      // Manually set `useAdditionalDayOfYearTokens` take priority over `defaultOptions.useAdditionalDayOfYearTokens`
      assert.throws(
        () =>
          format(new Date(1986, 3 /* Apr */, 4, 10, 32, 55, 123), 'yyyy-MM-D', {
            useAdditionalDayOfYearTokens: false,
          }),
        RangeError
      )
    })

    it('isMatch', () => {
      // For reference: not setting any options
      assert.throws(() => isMatch('200', 'D'), RangeError)

      setDefaultOptions({ useAdditionalDayOfYearTokens: true })

      assert(isMatch('200', 'D'))

      // Manually set `useAdditionalDayOfYearTokens` take priority over `defaultOptions.useAdditionalDayOfYearTokens`
      assert.throws(
        () =>
          isMatch('200', 'D', {
            useAdditionalDayOfYearTokens: false,
          }),
        RangeError
      )
    })

    it('parse', () => {
      const referenceDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)
      // For reference: not setting any options
      assert.throws(() => parse('200', 'D', referenceDate), RangeError)

      setDefaultOptions({ useAdditionalDayOfYearTokens: true })

      assert.deepStrictEqual(
        parse('200', 'D', referenceDate),
        new Date(1986, 6 /* Jul */, 19)
      )

      // Manually set `useAdditionalDayOfYearTokens` take priority over `defaultOptions.useAdditionalDayOfYearTokens`
      assert.throws(
        () =>
          parse('200', 'D', referenceDate, {
            useAdditionalDayOfYearTokens: false,
          }),
        RangeError
      )
    })
  })

  describe('includeSeconds', () => {
    it('formatDistance', () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 3)
        ),
        'less than a minute'
      )

      setDefaultOptions({ includeSeconds: true })

      assert.deepStrictEqual(
        formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 3)
        ),
        'less than 5 seconds'
      )

      // Manually set `includeSeconds` take priority over `defaultOptions.includeSeconds`
      assert.deepStrictEqual(
        formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 3),
          { includeSeconds: false }
        ),
        'less than a minute'
      )
    })
  })

  describe('addSuffix', () => {
    it('formatDistance', () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        formatDistance(
          new Date(1986, 3, 4, 11, 32, 0),
          new Date(1986, 3, 4, 10, 32, 0)
        ),
        'about 1 hour'
      )

      setDefaultOptions({ addSuffix: true })

      assert.deepStrictEqual(
        formatDistance(
          new Date(1986, 3, 4, 11, 32, 0),
          new Date(1986, 3, 4, 10, 32, 0)
        ),
        'in about 1 hour'
      )

      // Manually set `addSuffix` take priority over `defaultOptions.addSuffix`
      assert.deepStrictEqual(
        formatDistance(
          new Date(1986, 3, 4, 11, 32, 0),
          new Date(1986, 3, 4, 10, 32, 0),
          { addSuffix: false }
        ),
        'about 1 hour'
      )
    })

    it('formatDistanceStrict', () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 25)
        ),
        '25 seconds'
      )

      setDefaultOptions({ addSuffix: true })

      assert.deepStrictEqual(
        formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 25)
        ),
        '25 seconds ago'
      )

      // Manually set `addSuffix` take priority over `defaultOptions.addSuffix`
      assert.deepStrictEqual(
        formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 25),
          { addSuffix: false }
        ),
        '25 seconds'
      )
    })
  })

  describe('unit', () => {
    it('formatDistanceStrict', () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 34, 0)
        ),
        '2 minutes'
      )

      setDefaultOptions({ unit: 'second' })

      assert.deepStrictEqual(
        formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 34, 0)
        ),
        '120 seconds'
      )

      // Manually set `unit` take priority over `defaultOptions.unit`
      assert.deepStrictEqual(
        formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 34, 0),
          { unit: 'hour' }
        ),
        '0 hours'
      )
    })
  })

  describe('roundingMethod', () => {
    it('differenceInHours', () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        differenceInHours(
          new Date(2014, 6 /* Jul */, 2, 6, 0, 29),
          new Date(2014, 6 /* Jul */, 2, 20, 0, 28.973)
        ),
        -13
      )

      setDefaultOptions({ roundingMethod: 'floor' })

      assert.deepStrictEqual(
        differenceInHours(
          new Date(2014, 6 /* Jul */, 2, 6, 0, 29),
          new Date(2014, 6 /* Jul */, 2, 20, 0, 28.973)
        ),
        -14
      )

      // Manually set `roundingMethod` take priority over `defaultOptions.roundingMethod`
      assert.deepStrictEqual(
        differenceInHours(
          new Date(2014, 6 /* Jul */, 2, 6, 0, 29),
          new Date(2014, 6 /* Jul */, 2, 20, 0, 28.973),
          { roundingMethod: 'trunc' }
        ),
        -13
      )
    })

    it('differenceInMinutes', () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        differenceInMinutes(
          new Date(2014, 6 /* Jul */, 2, 12, 6, 50),
          new Date(2014, 6 /* Jul */, 2, 12, 20, 10)
        ),
        -13
      )

      setDefaultOptions({ roundingMethod: 'floor' })

      assert.deepStrictEqual(
        differenceInMinutes(
          new Date(2014, 6 /* Jul */, 2, 12, 6, 50),
          new Date(2014, 6 /* Jul */, 2, 12, 20, 10)
        ),
        -14
      )

      // Manually set `roundingMethod` take priority over `defaultOptions.roundingMethod`
      assert.deepStrictEqual(
        differenceInMinutes(
          new Date(2014, 6 /* Jul */, 2, 12, 6, 50),
          new Date(2014, 6 /* Jul */, 2, 12, 20, 10),
          { roundingMethod: 'trunc' }
        ),
        -13
      )
    })

    it('differenceInQuarters', () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        differenceInQuarters(
          new Date(2012, 6 /* Jul */, 2, 18, 0),
          new Date(2011, 4 /* May */, 2, 6, 0)
        ),
        4
      )

      setDefaultOptions({ roundingMethod: 'ceil' })

      assert.deepStrictEqual(
        differenceInQuarters(
          new Date(2012, 6 /* Jul */, 2, 18, 0),
          new Date(2011, 4 /* May */, 2, 6, 0)
        ),
        5
      )

      // Manually set `roundingMethod` take priority over `defaultOptions.roundingMethod`
      assert.deepStrictEqual(
        differenceInQuarters(
          new Date(2012, 6 /* Jul */, 2, 18, 0),
          new Date(2011, 4 /* May */, 2, 6, 0),
          { roundingMethod: 'trunc' }
        ),
        4
      )
    })

    it('differenceInSeconds', () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        differenceInSeconds(
          new Date(2014, 6 /* Jul */, 2, 12, 30, 6, 29),
          new Date(2014, 6 /* Jul */, 2, 12, 30, 20, 28.777)
        ),
        -13
      )

      setDefaultOptions({ roundingMethod: 'floor' })

      assert.deepStrictEqual(
        differenceInSeconds(
          new Date(2014, 6 /* Jul */, 2, 12, 30, 6, 29),
          new Date(2014, 6 /* Jul */, 2, 12, 30, 20, 28.777)
        ),
        -14
      )

      // Manually set `roundingMethod` take priority over `defaultOptions.roundingMethod`
      assert.deepStrictEqual(
        differenceInSeconds(
          new Date(2014, 6 /* Jul */, 2, 12, 30, 6, 29),
          new Date(2014, 6 /* Jul */, 2, 12, 30, 20, 28.777),
          { roundingMethod: 'trunc' }
        ),
        -13
      )
    })

    it('differenceInWeeks', () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        differenceInWeeks(
          new Date(2014, 5 /* Jun */, 29, 6, 0),
          new Date(2014, 6 /* Jul */, 13, 5, 0)
        ),
        -1
      )

      setDefaultOptions({ roundingMethod: 'floor' })

      assert.deepStrictEqual(
        differenceInWeeks(
          new Date(2014, 5 /* Jun */, 29, 6, 0),
          new Date(2014, 6 /* Jul */, 13, 5, 0)
        ),
        -2
      )

      // Manually set `roundingMethod` take priority over `defaultOptions.roundingMethod`
      assert.deepStrictEqual(
        differenceInWeeks(
          new Date(2014, 5 /* Jun */, 29, 6, 0),
          new Date(2014, 6 /* Jul */, 13, 5, 0),
          { roundingMethod: 'trunc' }
        ),
        -1
      )
    })

    it('formatDistanceStrict', () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 33, 59)
        ),
        '2 minutes'
      )

      setDefaultOptions({ roundingMethod: 'floor' })

      assert.deepStrictEqual(
        formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 33, 59)
        ),
        '1 minute'
      )

      // Manually set `roundingMethod` take priority over `defaultOptions.roundingMethod`
      assert.deepStrictEqual(
        formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 33, 59),
          { roundingMethod: 'round' }
        ),
        '2 minutes'
      )
    })
  })

  describe('zero', () => {
    it('formatDuration', () => {
      const duration = {
        years: 0,
        months: 0,
        weeks: 1,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      }
      // For reference: not setting any options
      assert.deepStrictEqual(formatDuration(duration), '1 week')

      setDefaultOptions({ zero: true })

      assert.deepStrictEqual(
        formatDuration(duration),
        '0 years 0 months 1 week 0 days 0 hours 0 minutes 0 seconds'
      )

      // Manually set `zero` take priority over `defaultOptions.zero`
      assert.deepStrictEqual(
        formatDuration(duration, { zero: false }),
        '1 week'
      )
    })
  })

  describe('delimiter', () => {
    it('formatDuration', () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        formatDuration({ months: 9, days: 2 }),
        '9 months 2 days'
      )

      setDefaultOptions({ delimiter: ', ' })

      assert.deepStrictEqual(
        formatDuration({ months: 9, days: 2 }),
        '9 months, 2 days'
      )

      // Manually set `delimiter` take priority over `defaultOptions.delimiter`
      assert.deepStrictEqual(
        formatDuration({ months: 9, days: 2 }, { delimiter: ' ' }),
        '9 months 2 days'
      )
    })
  })

  describe('format', () => {
    it('formatISO', () => {
      const date = new Date(2019, 11 /* Dec */, 11, 19, 0, 52)
      const tzOffset = generateOffset(date)
      // For reference: not setting any options
      assert.deepStrictEqual(formatISO(date), `2019-12-11T19:00:52${tzOffset}`)

      setDefaultOptions({ format: 'basic' })

      assert.deepStrictEqual(formatISO(date), `20191211T190052${tzOffset}`)

      // Manually set `format` take priority over `defaultOptions.format`
      assert.deepStrictEqual(
        formatISO(date, { format: 'extended' }),
        `2019-12-11T19:00:52${tzOffset}`
      )
    })

    it('formatISO9075', () => {
      const date = new Date(2019, 11 /* Dec */, 11, 19, 0, 52)
      // For reference: not setting any options
      assert.deepStrictEqual(formatISO9075(date), '2019-12-11 19:00:52')

      setDefaultOptions({ format: 'basic' })

      assert.deepStrictEqual(formatISO9075(date), '20191211 190052')

      // Manually set `format` take priority over `defaultOptions.format`
      assert.deepStrictEqual(
        formatISO9075(date, { format: 'extended' }),
        '2019-12-11 19:00:52'
      )
    })

    it('formatDuration', () => {
      const duration = {
        years: 2,
        months: 9,
        days: 7,
      }
      // For reference: not setting any options
      assert.deepStrictEqual(
        formatDuration(duration),
        '2 years 9 months 7 days'
      )

      setDefaultOptions({ format: ['months', 'days'] })

      assert.deepStrictEqual(formatDuration(duration), '9 months 7 days')

      // Manually set `format` take priority over `defaultOptions.format`
      assert.deepStrictEqual(
        formatDuration(duration, { format: ['years'] }),
        '2 years'
      )
    })
  })

  describe('representation', () => {
    it('formatISO', () => {
      const date = new Date(2019, 11 /* Dec */, 11, 19, 0, 52)
      const tzOffset = generateOffset(date)
      // For reference: not setting any options
      assert.deepStrictEqual(formatISO(date), `2019-12-11T19:00:52${tzOffset}`)

      setDefaultOptions({ representation: 'date' })

      assert.deepStrictEqual(formatISO(date), '2019-12-11')

      // Manually set `representation` take priority over `defaultOptions.representation`
      assert.deepStrictEqual(
        formatISO(date, { representation: 'time' }),
        `19:00:52${tzOffset}`
      )
    })

    it('formatISO9075', () => {
      const date = new Date(2019, 11 /* Dec */, 11, 19, 0, 52)
      // For reference: not setting any options
      assert.deepStrictEqual(formatISO9075(date), '2019-12-11 19:00:52')

      setDefaultOptions({ representation: 'date' })

      assert.deepStrictEqual(formatISO9075(date), '2019-12-11')

      // Manually set `representation` take priority over `defaultOptions.representation`
      assert.deepStrictEqual(
        formatISO9075(date, { representation: 'time' }),
        '19:00:52'
      )
    })
  })

  describe('fractionDigits', () => {
    it('formatRFC3339', () => {
      const date = new Date(2019, 11 /* Dec */, 11, 1, 0, 0, 789)
      // For reference: not setting any options
      assert.deepStrictEqual(
        formatRFC3339(date),
        `2019-12-11T01:00:00${generateOffset(date)}`
      )

      setDefaultOptions({ fractionDigits: 3 })

      assert.deepStrictEqual(
        formatRFC3339(date),
        `2019-12-11T01:00:00.789${generateOffset(date)}`
      )

      // Manually set `fractionDigits` take priority over `defaultOptions.fractionDigits`
      assert.deepStrictEqual(
        formatRFC3339(date, {
          fractionDigits: 0,
        }),
        `2019-12-11T01:00:00${generateOffset(date)}`
      )
    })
  })

  describe('additionalDigits', () => {
    it('parseISO', () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        parseISO('+12340702'),
        new Date(123407, 1 /* Feb */, 1)
      )

      setDefaultOptions({ additionalDigits: 0 })

      assert.deepStrictEqual(
        parseISO('+12340702'),
        new Date(1234, 6 /* Jul */, 2)
      )

      // Manually set `additionalDigits` take priority over `defaultOptions.additionalDigits`
      assert.deepStrictEqual(
        parseISO('+12340702', {
          additionalDigits: 2,
        }),
        new Date(123407, 1 /* Feb */, 1)
      )
    })
  })

  describe('nearestTo', () => {
    it('roundToNearestMinutes', () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        roundToNearestMinutes(new Date(2014, 6 /* Jul */, 10, 12, 10, 30)),
        new Date(2014, 6 /* Jul */, 10, 12, 11, 0)
      )

      setDefaultOptions({ nearestTo: 4 })

      assert.deepStrictEqual(
        roundToNearestMinutes(new Date(2014, 6 /* Jul */, 10, 12, 10, 30)),
        new Date(2014, 6 /* Jul */, 10, 12, 12, 0)
      )

      // Manually set `nearestTo` take priority over `defaultOptions.nearestTo`
      assert.deepStrictEqual(
        roundToNearestMinutes(new Date(2014, 6 /* Jul */, 10, 12, 10, 30), {
          nearestTo: 1,
        }),
        new Date(2014, 6 /* Jul */, 10, 12, 11, 0)
      )
    })
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(setDefaultOptions.bind(null), TypeError)
  })
})
