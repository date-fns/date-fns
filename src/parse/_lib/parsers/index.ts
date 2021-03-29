import { EraParser } from './EraParser'
import { YearParser } from './YearParser'
import { WeekNumberYearParser } from './WeekNumberYearParser'
import { ISOWeekNumberYearParser } from './ISOWeekNumberYearParser'
import { ExtendedYearParser } from './ExtendedYearParser'
import { QuarterParser } from './QuarterParser'
import { StandAloneQuarterParser } from './StandAloneQuarterParser'
import { MonthParser } from './MonthParser'
import { StandAloneMonthParser } from './StandAloneMonthParser'
import { LocalWeekYearParser } from './LocalWeekYearParser'
import { ISOWeekYearParser } from './ISOWeekYearParser'
import { DayOfMonthParser } from './DayOfMonthParser'
import { DayOfYearParser } from './DayOfYearParser'
import { DayOfWeekParser } from './DayOfWeekParser'
import { LocalDayOfWeekParser } from './LocalDayOfWeekParser'
import { StandAloneLocalDayOfWeekParser } from './StandAloneLocalDayOfWeekParser'
import { ISODayOfWeekParser } from './ISODayOfWeekParser'
import { AMOrPMParser } from './AMOrPMParser'
import { AMPMMidnightParser } from './AMPMMidnightParser'
import { FlexibleDayPeriodParser } from './FlexibleDayPeriodParser'
import { HourFormatFrom1to12Parser } from './HourFormatFrom1to12Parser'
import { HourFormatFrom0to23Parser } from './HourFormatFrom0to23Parser'
import { HourFormatFrom0to11Parser } from './HourFormatFrom0to11Parser'
import { HourFormatFrom1to24Parser } from './HourFormatFrom1to24Parser'
import { MinuteParser } from './MinuteParser'
import { SecondParser } from './SecondParser'
import { FractionOfSecondParser } from './FractionOfSecondParser'
import { TimezoneWithZParser } from './TimezoneWithZParser'
import { TimezoneWithoutZParser } from './TimezoneWithoutZParser'
import { SecondsTimestampParser } from './SecondsTimestampParser'
import { MillisecondsTimestampParser } from './MillisecondsTimestampParser'

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
export {
  EraParser,
  YearParser,
  WeekNumberYearParser,
  ISOWeekNumberYearParser,
  ExtendedYearParser,
  QuarterParser,
  StandAloneQuarterParser,
  MonthParser,
  StandAloneMonthParser,
  LocalWeekYearParser,
  ISOWeekYearParser,
  DayOfMonthParser,
  DayOfYearParser,
  DayOfWeekParser,
  LocalDayOfWeekParser,
  StandAloneLocalDayOfWeekParser,
  ISODayOfWeekParser,
  AMOrPMParser,
  AMPMMidnightParser,
  FlexibleDayPeriodParser,
  HourFormatFrom1to12Parser,
  HourFormatFrom0to23Parser,
  HourFormatFrom0to11Parser,
  HourFormatFrom1to24Parser,
  MinuteParser,
  SecondParser,
  FractionOfSecondParser,
  TimezoneWithZParser,
  TimezoneWithoutZParser,
  SecondsTimestampParser,
  MillisecondsTimestampParser,
}
