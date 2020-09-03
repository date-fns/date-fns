import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../../_lib/buildLocalizeArr... Remove this comment to see the full error message
import buildLocalizeArrayFn from '../../../_lib/buildLocalizeArrayFn/index'

var weekdayValues = {
  narrow: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
  short: ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
  long: [
    'الأحد',
    'الاثنين',
    'الثلاثاء',
    'الأربعاء',
    'الخميس',
    'الجمعة',
    'السبت'
  ]
}

var monthValues = {
  short: [
    'يناير',
    'فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر'
  ],
  long: [
    'كانون الثاني يناير',
    'شباط فبراير',
    'آذار مارس',
    'نيسان أبريل',
    'أيار مايو',
    'حزيران يونيو',
    'تموز يوليو',
    'آب أغسطس',
    'أيلول سبتمبر',
    'تشرين الأول أكتوبر',
    'تشرين الثاني نوفمبر',
    'كانون الأول ديسمبر'
  ]
}

var timeOfDayValues = {
  uppercase: ['صباح', 'مساء'],
  lowercase: ['ص', 'م'],
  long: ['صباحاً', 'مساءً']
}

function ordinalNumber(dirtyNumber) {
  return String(dirtyNumber)
}

var localize = {
  ordinalNumber: ordinalNumber,
  // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 2.
  weekday: buildLocalizeFn(weekdayValues, 'long'),
  weekdays: buildLocalizeArrayFn(weekdayValues, 'long'),
  // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 2.
  month: buildLocalizeFn(monthValues, 'long'),
  months: buildLocalizeArrayFn(monthValues, 'long'),
  // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 3.
  timeOfDay: buildLocalizeFn(timeOfDayValues, 'long', function(hours) {
    return hours / 12 >= 1 ? 1 : 0
  }),
  timesOfDay: buildLocalizeArrayFn(timeOfDayValues, 'long')
}

export default localize
