import buildMatchFn from '../../../_lib/buildMatchFn/index.js'
import buildParseFn from '../../../_lib/buildParseFn/index.js'
import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index.js'
import parseDecimal from '../../../_lib/parseDecimal/index.js'

const matchOrdinalNumbersPattern = /^(\d+)(e|er|ère|ème|ième)?/i

const matchWeekdaysPatterns = {
  narrow: /^(di|lu|ma|me|je|ve|sa)/i,
  short: /^(dim|lun|mar|mer|jeu|ven|sam)/i,
  long: /^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i
}

const parseWeekdayPatterns = {
  any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^j/i, /^v/i, /^s/i]
}

const matchMonthsPatterns = {
  short: /^(jan|fév|mar|avr|mai|juin|juil|aoû|sep|oct|nov|déc)/i,
  long: /^('janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre')/i
}

const parseMonthPatterns = {
  any: [/^ja/i, /^f/i, /^mar/i, /^av/i, /^mai$/i, /^juin/i, /^juil/i, /^ao/i, /^s/i, /^o/i, /^n/i, /^d/i]
}

const matchTimesOfDayPatterns = {
  short: /^(am|pm)/i,
  long: /^([ap]\.?\s?m\.?)/i
}

const parseTimeOfDayPatterns = {
  any: [/^a/i, /^p/i]
}

const match = {
  ordinalNumbers: buildMatchPatternFn(matchOrdinalNumbersPattern),
  ordinalNumber: parseDecimal,
  weekdays: buildMatchFn(matchWeekdaysPatterns, 'long'),
  weekday: buildParseFn(parseWeekdayPatterns, 'any'),
  months: buildMatchFn(matchMonthsPatterns, 'long'),
  month: buildParseFn(parseMonthPatterns, 'any'),
  timesOfDay: buildMatchFn(matchTimesOfDayPatterns, 'long'),
  timeOfDay: buildParseFn(parseTimeOfDayPatterns, 'any')
}

export default match
