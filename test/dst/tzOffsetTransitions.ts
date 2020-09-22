type PartialInterval = {
  start: Date | undefined
  end: Date | undefined
}

/**
 * Fetch the start and end of DST for the local time
 * zone in a given year.
 * We'll assume that DST start & end are the first
 * forward and the last back transitions in the year,
 * except transitions in Jan or Dec which are likely
 * to be permanent TZ changes rather than DST changes.
 * @param {number} year
 * @returns object with two Date-valued properties:
 * - `start` is the first instant of DST in the Spring,
 *   or undefined if there's no DST in this year.
 * - `end` is the first instant of standard time
 *   in the Fall, or undefined if there's no DST in
 *   this year.
 */
export function getDstTransitions(year: number): PartialInterval {
  const result: PartialInterval = {
    start: undefined,
    end: undefined
  }
  const transitions = getTzOffsetTransitions(year)
  for (let i = 0; i < transitions.length; i++) {
    const t = transitions[i]
    const month = t.date.getMonth()
    if (month > 0 && month < 11) {
      if (t.type === 'forward') result.start = t.date
      if (t.type === 'back' && !result.end) result.end = t.date
    }
  }
  return result
}

function isValidDate(date: unknown): date is Date {
  return date instanceof Date && !isNaN(date.getTime())
}

const MINUTE = 1000 * 60

function firstTickInLocalDay(date: Date): Date {
  const dateNumber = date.getDate()
  let prev = date
  let d = date
  do {
    prev = d
    d = new Date(d.getTime() - MINUTE)
  } while (dateNumber === d.getDate())
  return prev
}

function fiveMinutesLater(date: Date): Date {
  return new Date(date.getTime() + 5 * MINUTE)
}

function oneDayLater(date: Date): Date {
  const d = new Date(date)
  d.setDate(d.getDate() + 1)
  return firstTickInLocalDay(d)
}

function previousTickTimezoneOffset(date: Date): number {
  const d = new Date(date.getTime() - 1)
  return d.getTimezoneOffset()
}

/**
 * Fetch all timezone-offset transitions in a given
 * year.  These are almost always DST transitions,
 * but sometimes there are non-DST changes, e.g.
 * when a country changes its time zone
 * @param {number} year
 * @returns array of objects, each  with the following 
 * propeerties:
 * - `date` - a `Date` representing the first instant
 *   when the new timezone offset is effective.
 * - `type` - either `forward` for skippnig time like
 *   the Spring transition to DST.
 * - `before` - the timezone offset before the tranition.
 *   For example, the UTC-0400 offset will return -240.
 *   To match how times are displayed in ISO 8601 format,
 *   the sign of this value is reversed from the return
 *   value of `Date.getTimezoneOffset`.
 * - `after` - the timezone offset after the tranition.
 *   Examples and caveats are the same as `before`.

 */
export function getTzOffsetTransitions(year: number) {
  // start at the end of the previous day
  let date = firstTickInLocalDay(new Date(year, 0, 1))
  if (!isValidDate(date)) {
    throw new Error('Invalid Date')
  }
  let baseTzOffset = previousTickTimezoneOffset(date)
  const transitions = []
  do {
    let tzOffset = date.getTimezoneOffset()
    if (baseTzOffset !== tzOffset) {
      if (tzOffset !== previousTickTimezoneOffset(date)) {
        // Transition is the first tick of a local day.
        transitions.push({
          date: date,
          type: tzOffset < baseTzOffset ? 'forward' : 'back',
          before: -baseTzOffset,
          after: -tzOffset
        })
        baseTzOffset = tzOffset
      } else {
        // transition was not at the start of the day, so it must have happened
        // yesterday. Back up one day and find the minute where it happened.
        let transitionDate = new Date(date.getTime())
        transitionDate.setDate(transitionDate.getDate() - 1)

        // Iterate through each 5 mins of the day until we find a transition.
        // TODO: this could be optimized to search hours then minutes or by or
        // by using a binary search.
        const dayNumber = transitionDate.getDate()
        while (
          isValidDate(transitionDate) &&
          transitionDate.getDate() === dayNumber
        ) {
          tzOffset = transitionDate.getTimezoneOffset()
          if (baseTzOffset !== tzOffset) {
            transitions.push({
              date: transitionDate,
              type: tzOffset < baseTzOffset ? 'forward' : 'back',
              before: -baseTzOffset,
              after: -tzOffset
            })
            baseTzOffset = tzOffset
            break // assuming only 1 transition per day
          }
          transitionDate = fiveMinutesLater(transitionDate)
        }
      }
    }
    date = oneDayLater(date)
  } while (date.getFullYear() === year)
  return transitions
}
