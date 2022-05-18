import { Parser } from '../Parser'
import { EraParser } from './EraParser'
import { YearParser } from './YearParser'
import { LocalWeekYearParser } from './LocalWeekYearParser'
import { ISOWeekYearParser } from './ISOWeekYearParser'
import { ExtendedYearParser } from './ExtendedYearParser'
import { QuarterParser } from './QuarterParser'
import { StandAloneQuarterParser } from './StandAloneQuarterParser'
import { MonthParser } from './MonthParser'
import { StandAloneMonthParser } from './StandAloneMonthParser'
import { LocalWeekParser } from './LocalWeekParser'
import { ISOWeekParser } from './ISOWeekParser'
import { DateParser } from './DateParser'
import { DayOfYearParser } from './DayOfYearParser'
import { DayParser } from './DayParser'
import { LocalDayParser } from './LocalDayParser'
import { StandAloneLocalDayParser } from './StandAloneLocalDayParser'
import { ISODayParser } from './ISODayParser'
import { AMPMParser } from './AMPMParser'
import { AMPMMidnightParser } from './AMPMMidnightParser'
import { DayPeriodParser } from './DayPeriodParser'
import { Hour1to12Parser } from './Hour1to12Parser'
import { Hour0to23Parser } from './Hour0to23Parser'
import { Hour0To11Parser } from './Hour0To11Parser'
import { Hour1To24Parser } from './Hour1To24Parser'
import { MinuteParser } from './MinuteParser'
import { SecondParser } from './SecondParser'
import { FractionOfSecondParser } from './FractionOfSecondParser'
import { ISOTimezoneWithZParser } from './ISOTimezoneWithZParser'
import { ISOTimezoneParser } from './ISOTimezoneParser'
import { TimestampSecondsParser } from './TimestampSecondsParser'
import { TimestampMillisecondsParser } from './TimestampMillisecondsParser'

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */
export const parsers: Record<string, Parser<any>> = {
  G: new EraParser(),
  y: new YearParser(),
  Y: new LocalWeekYearParser(),
  R: new ISOWeekYearParser(),
  u: new ExtendedYearParser(),
  Q: new QuarterParser(),
  q: new StandAloneQuarterParser(),
  M: new MonthParser(),
  L: new StandAloneMonthParser(),
  w: new LocalWeekParser(),
  I: new ISOWeekParser(),
  d: new DateParser(),
  D: new DayOfYearParser(),
  E: new DayParser(),
  e: new LocalDayParser(),
  c: new StandAloneLocalDayParser(),
  i: new ISODayParser(),
  a: new AMPMParser(),
  b: new AMPMMidnightParser(),
  B: new DayPeriodParser(),
  h: new Hour1to12Parser(),
  H: new Hour0to23Parser(),
  K: new Hour0To11Parser(),
  k: new Hour1To24Parser(),
  m: new MinuteParser(),
  s: new SecondParser(),
  S: new FractionOfSecondParser(),
  X: new ISOTimezoneWithZParser(),
  x: new ISOTimezoneParser(),
  t: new TimestampSecondsParser(),
  T: new TimestampMillisecondsParser(),
}
