import type { Quarter } from '../../../../types'
import type { Localize, LocalizeFn } from '../../../types'
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

const eraValues = {
  narrow: ['Î', 'D'] as const,
  abbreviated: ['Î.d.C.', 'D.C.'] as const,
  wide: ['Înainte de Cristos', 'După Cristos'] as const,
}

const quarterValues = {
  narrow: ['1', '2', '3', '4'] as const,
  abbreviated: ['T1', 'T2', 'T3', 'T4'] as const,
  wide: [
    'primul trimestru',
    'al doilea trimestru',
    'al treilea trimestru',
    'al patrulea trimestru',
  ] as const,
}

const monthValues = {
  narrow: ['I', 'F', 'M', 'A', 'M', 'I', 'I', 'A', 'S', 'O', 'N', 'D'] as const,
  abbreviated: [
    'ian',
    'feb',
    'mar',
    'apr',
    'mai',
    'iun',
    'iul',
    'aug',
    'sep',
    'oct',
    'noi',
    'dec',
  ] as const,
  wide: [
    'ianuarie',
    'februarie',
    'martie',
    'aprilie',
    'mai',
    'iunie',
    'iulie',
    'august',
    'septembrie',
    'octombrie',
    'noiembrie',
    'decembrie',
  ] as const,
}

const dayValues = {
  narrow: ['d', 'l', 'm', 'm', 'j', 'v', 's'] as const,
  short: ['du', 'lu', 'ma', 'mi', 'jo', 'vi', 'sâ'] as const,
  abbreviated: ['dum', 'lun', 'mar', 'mie', 'joi', 'vin', 'sâm'] as const,
  wide: [
    'duminică',
    'luni',
    'marți',
    'miercuri',
    'joi',
    'vineri',
    'sâmbătă',
  ] as const,
}

const dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mn',
    noon: 'ami',
    morning: 'dim',
    afternoon: 'da',
    evening: 's',
    night: 'n',
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'miezul nopții',
    noon: 'amiază',
    morning: 'dimineață',
    afternoon: 'după-amiază',
    evening: 'seară',
    night: 'noapte',
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'miezul nopții',
    noon: 'amiază',
    morning: 'dimineață',
    afternoon: 'după-amiază',
    evening: 'seară',
    night: 'noapte',
  },
}

const formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mn',
    noon: 'amiază',
    morning: 'dimineață',
    afternoon: 'după-amiază',
    evening: 'seară',
    night: 'noapte',
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'miezul nopții',
    noon: 'amiază',
    morning: 'dimineață',
    afternoon: 'după-amiază',
    evening: 'seară',
    night: 'noapte',
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'miezul nopții',
    noon: 'amiază',
    morning: 'dimineață',
    afternoon: 'după-amiază',
    evening: 'seară',
    night: 'noapte',
  },
}

const ordinalNumber: LocalizeFn<number, undefined> = (
  dirtyNumber,
  _options
) => {
  return String(dirtyNumber)
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
