import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'
import type { LocalizeFn } from '../../../types'

const eraValues = {
  narrow: ['ق', 'ب'],
  abbreviated: ['ق.م.', 'ب.م.'],
  wide: ['قبل الميلاد', 'بعد الميلاد'],
}

const quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['ر1', 'ر2', 'ر3', 'ر4'],
  wide: ['الربع الأول', 'الربع الثاني', 'الربع الثالث', 'الربع الرابع'],
}

const monthValues = {
  narrow: ['د', 'ن', 'أ', 'س', 'أ', 'ج', 'ج', 'م', 'أ', 'م', 'ف', 'ج'],
  abbreviated: [
    'جانفي',
    'فيفري',
    'مارس',
    'أفريل',
    'ماي',
    'جوان',
    'جويلية',
    'أوت',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر',
  ],
  wide: [
    'جانفي',
    'فيفري',
    'مارس',
    'أفريل',
    'ماي',
    'جوان',
    'جويلية',
    'أوت',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر',
  ],
}

const dayValues = {
  narrow: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
  short: ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
  abbreviated: ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
  wide: [
    'الأحد',
    'الاثنين',
    'الثلاثاء',
    'الأربعاء',
    'الخميس',
    'الجمعة',
    'السبت',
  ],
}

const dayPeriodValues = {
  narrow: {
    am: 'ص',
    pm: 'ع',
    morning: 'الصباح',
    noon: 'القايلة',
    afternoon: 'بعد القايلة',
    evening: 'العشية',
    night: 'الليل',
    midnight: 'نص الليل',
  },
  abbreviated: {
    am: 'ص',
    pm: 'ع',
    morning: 'الصباح',
    noon: 'القايلة',
    afternoon: 'بعد القايلة',
    evening: 'العشية',
    night: 'الليل',
    midnight: 'نص الليل',
  },
  wide: {
    am: 'ص',
    pm: 'ع',
    morning: 'الصباح',
    noon: 'القايلة',
    afternoon: 'بعد القايلة',
    evening: 'العشية',
    night: 'الليل',
    midnight: 'نص الليل',
  },
}

const formattingDayPeriodValues = {
  narrow: {
    am: 'ص',
    pm: 'ع',
    morning: 'في الصباح',
    noon: 'في القايلة',
    afternoon: 'بعد القايلة',
    evening: 'في العشية',
    night: 'في الليل',
    midnight: 'نص الليل',
  },
  abbreviated: {
    am: 'ص',
    pm: 'ع',
    morning: 'في الصباح',
    noon: 'في القايلة',
    afternoon: 'بعد القايلة',
    evening: 'في العشية',
    night: 'في الليل',
    midnight: 'نص الليل',
  },
  wide: {
    am: 'ص',
    pm: 'ع',
    morning: 'في الصباح',
    noon: 'في القايلة',
    afternoon: 'بعد القايلة',
    evening: 'في العشية',
    night: 'في الليل',
    midnight: 'نص الليل',
  },
}

const ordinalNumber: LocalizeFn<number> = (dirtyNumber) => {
  return String(dirtyNumber)
}

const localize = {
  ordinalNumber: ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide',
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: (quarter: number) => quarter - 1,
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide',
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide',
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide',
  }),
}

export default localize
