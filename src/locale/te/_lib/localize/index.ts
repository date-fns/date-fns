import type { Quarter } from '../../../../types'
import type { Localize, LocalizeFn } from '../../../types'
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

// Source: https://www.unicode.org/cldr/charts/32/summary/te.html
// Source: https://dsal.uchicago.edu/dictionaries/brown/

// CLDR #1605 - #1608
const eraValues = {
  narrow: ['క్రీ.పూ.', 'క్రీ.శ.'] as const,
  abbreviated: ['క్రీ.పూ.', 'క్రీ.శ.'] as const,
  wide: ['క్రీస్తు పూర్వం', 'క్రీస్తుశకం'] as const,
}

// CLDR #1613 - #1628
const quarterValues = {
  narrow: ['1', '2', '3', '4'] as const,
  abbreviated: ['త్రై1', 'త్రై2', 'త్రై3', 'త్రై4'] as const,
  wide: [
    '1వ త్రైమాసికం',
    '2వ త్రైమాసికం',
    '3వ త్రైమాసికం',
    '4వ త్రైమాసికం',
  ] as const,
}

// CLDR #1637 - #1708
const monthValues = {
  narrow: [
    'జ',
    'ఫి',
    'మా',
    'ఏ',
    'మే',
    'జూ',
    'జు',
    'ఆ',
    'సె',
    'అ',
    'న',
    'డి',
  ] as const,
  abbreviated: [
    'జన',
    'ఫిబ్ర',
    'మార్చి',
    'ఏప్రి',
    'మే',
    'జూన్',
    'జులై',
    'ఆగ',
    'సెప్టెం',
    'అక్టో',
    'నవం',
    'డిసెం',
  ] as const,
  wide: [
    'జనవరి',
    'ఫిబ్రవరి',
    'మార్చి',
    'ఏప్రిల్',
    'మే',
    'జూన్',
    'జులై',
    'ఆగస్టు',
    'సెప్టెంబర్',
    'అక్టోబర్',
    'నవంబర్',
    'డిసెంబర్',
  ] as const,
}

// CLDR #1709 - #1764
const dayValues = {
  narrow: ['ఆ', 'సో', 'మ', 'బు', 'గు', 'శు', 'శ'] as const,
  short: ['ఆది', 'సోమ', 'మంగళ', 'బుధ', 'గురు', 'శుక్ర', 'శని'] as const,
  abbreviated: ['ఆది', 'సోమ', 'మంగళ', 'బుధ', 'గురు', 'శుక్ర', 'శని'] as const,
  wide: [
    'ఆదివారం',
    'సోమవారం',
    'మంగళవారం',
    'బుధవారం',
    'గురువారం',
    'శుక్రవారం',
    'శనివారం',
  ] as const,
}

// CLDR #1767 - #1806
const dayPeriodValues = {
  narrow: {
    am: 'పూర్వాహ్నం',
    pm: 'అపరాహ్నం',
    midnight: 'అర్ధరాత్రి',
    noon: 'మిట్టమధ్యాహ్నం',
    morning: 'ఉదయం',
    afternoon: 'మధ్యాహ్నం',
    evening: 'సాయంత్రం',
    night: 'రాత్రి',
  },
  abbreviated: {
    am: 'పూర్వాహ్నం',
    pm: 'అపరాహ్నం',
    midnight: 'అర్ధరాత్రి',
    noon: 'మిట్టమధ్యాహ్నం',
    morning: 'ఉదయం',
    afternoon: 'మధ్యాహ్నం',
    evening: 'సాయంత్రం',
    night: 'రాత్రి',
  },
  wide: {
    am: 'పూర్వాహ్నం',
    pm: 'అపరాహ్నం',
    midnight: 'అర్ధరాత్రి',
    noon: 'మిట్టమధ్యాహ్నం',
    morning: 'ఉదయం',
    afternoon: 'మధ్యాహ్నం',
    evening: 'సాయంత్రం',
    night: 'రాత్రి',
  },
}

const formattingDayPeriodValues = {
  narrow: {
    am: 'పూర్వాహ్నం',
    pm: 'అపరాహ్నం',
    midnight: 'అర్ధరాత్రి',
    noon: 'మిట్టమధ్యాహ్నం',
    morning: 'ఉదయం',
    afternoon: 'మధ్యాహ్నం',
    evening: 'సాయంత్రం',
    night: 'రాత్రి',
  },
  abbreviated: {
    am: 'పూర్వాహ్నం',
    pm: 'అపరాహ్నం',
    midnight: 'అర్ధరాత్రి',
    noon: 'మిట్టమధ్యాహ్నం',
    morning: 'ఉదయం',
    afternoon: 'మధ్యాహ్నం',
    evening: 'సాయంత్రం',
    night: 'రాత్రి',
  },
  wide: {
    am: 'పూర్వాహ్నం',
    pm: 'అపరాహ్నం',
    midnight: 'అర్ధరాత్రి',
    noon: 'మిట్టమధ్యాహ్నం',
    morning: 'ఉదయం',
    afternoon: 'మధ్యాహ్నం',
    evening: 'సాయంత్రం',
    night: 'రాత్రి',
  },
}

const ordinalNumber: LocalizeFn<number, undefined> = (
  dirtyNumber,
  _options
) => {
  const number = Number(dirtyNumber)
  return number + 'వ'
}

const localize: Localize = {
  ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide',
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: (quarter) => (quarter - 1) as Quarter,
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
