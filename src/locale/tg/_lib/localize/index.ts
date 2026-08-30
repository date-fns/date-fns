import type { Localize, LocalizeFn } from '../../../types';
import type { Quarter } from '../../../../types';
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index';

const eraValues = {
  narrow: ['т.м.', 'м.'] as const,
  abbreviated: ['то м.', 'м.'] as const,
  wide: ['то милод', 'милодӣ'] as const,
}

const quarterValues = {
  narrow: ['1', '2', '3', '4'] as const,
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'] as const,
  wide: ['1-ум семоҳа', '2-юм семоҳа', '3-юм семоҳа', '4-ум семоҳа'] as const
}

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ['Я', 'Ф', 'М', 'А', 'М', 'И', 'И', 'А', 'С', 'О', 'Н', 'Д'] as const,
  abbreviated: ['янв', 'фев', 'март', 'апр', 'май', 'июн', 'июл', 'авг', 'сент', 'окт', 'нояб', 'дек'] as const,
  wide: ['январ', 'феврал', 'март', 'апрел', 'май', 'июн', 'июл', 'август', 'сентябр', 'октябр', 'ноябр', 'декабр'] as const,
}

const formattingMonthValues = {
  narrow: ['Я', 'Ф', 'М', 'А', 'М', 'И', 'И', 'А', 'С', 'О', 'Н', 'Д'] as const,
  abbreviated: ['янв.', 'фев.', 'мар.', 'апр.', 'майи', 'июн.', 'июл.', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.'] as const,
  wide: ['январи', 'феврали', 'марти', 'апрели', 'майи', 'июни', 'июли', 'августи', 'сентябри', 'октябри', 'ноябри', 'декабри'] as const
}

const dayValues = {
  narrow: ['я', 'д', 'с', 'ч', 'п', 'ҷ', 'ш'] as const,
  short: ['яш', 'дш', 'сш', 'чш', 'пш', 'ҷм', 'шб'] as const,
  abbreviated: ['яшб', 'дшб', 'сшб', 'чшб', 'пшб', 'ҷум', 'шнб'] as const,
  wide: ['якшанбе', 'душанбе', 'сешанбе', 'чоршанбе', 'панҷшанбе', 'ҷумъа', 'шанбе'] as const
}

const dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'нисфи шаб',
    noon: 'нисфи рӯз',
    morning: 'субҳ',
    afternoon: 'рӯз',
    evening: 'бегоҳ',
    night: 'шаб',
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'нисфи шаб',
    noon: 'нисфи рӯз',
    morning: 'субҳ',
    afternoon: 'рӯз',
    evening: 'бегоҳ',
    night: 'шаб',
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'нисфи шаб',
    noon: 'нисфи рӯз',
    morning: 'субҳ',
    afternoon: 'рӯз',
    evening: 'бегоҳ',
    night: 'шаб',
  },
}

const formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'нисфишаб.',
    noon: 'нисфирӯз.',
    morning: 'саҳар.',
    afternoon: 'рӯз.',
    evening: 'бегоҳ.',
    night: 'шаб.',
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'нисфишаб.',
    noon: 'нисфирӯз.',
    morning: 'саҳар.',
    afternoon: 'рӯз.',
    evening: 'бегоҳ.',
    night: 'шаб.',
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'нисфишабӣ',
    noon: 'нисфирӯзӣ',
    morning: 'саҳарӣ',
    afternoon: 'рӯзона',
    evening: 'бегоҳӣ',
    night: 'шабона',
  },
}

const ordinalNumber: LocalizeFn<number, undefined> = (dirtyNumber, _dirtyOptions) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + '-ум';
      case 2:
        return number + '-юм';
      case 3:
        return number + '-юм';
    }
  }
  return number + '-ум';
}

const localize: Localize = {
  ordinalNumber: ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide',
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: (quarter) => Number(quarter) - 1 as Quarter,
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide',
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: 'wide'
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
