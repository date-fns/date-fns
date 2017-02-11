import setUTCDay from '../set_utc_day/index.js'
import setUTCISODay from '../set_utc_iso_day/index.js'
import setUTCISOWeek from '../set_utc_iso_week/index.js'
import setUTCISOYear from '../set_utc_iso_year/index.js'
import startOfUTCISOWeek from '../start_of_utc_iso_week/index.js'
import startOfUTCISOYear from '../start_of_utc_iso_year/index.js'

var MILLISECONDS_IN_MINUTE = 60000

var units = {
  year: {
    priority: 10,
    set: function (date, value) {
      date.setUTCFullYear(value, 0, 1)
      date.setUTCHours(0, 0, 0, 0)
      return date
    }
  },

  isoYear: {
    priority: 10,
    set: function (date, value, options) {
      return startOfUTCISOYear(setUTCISOYear(date, value, options), options)
    }
  },

  quarter: {
    priority: 20,
    set: function (date, value) {
      date.setUTCMonth((value - 1) * 3, 1)
      date.setUTCHours(0, 0, 0, 0)
      return date
    }
  },

  month: {
    priority: 30,
    set: function (date, value) {
      date.setUTCMonth(value, 1)
      date.setUTCHours(0, 0, 0, 0)
      return date
    }
  },

  isoWeek: {
    priority: 40,
    set: function (date, value, options) {
      return startOfUTCISOWeek(setUTCISOWeek(date, value, options), options)
    }
  },

  day: {
    priority: 50,
    set: function (date, value, options) {
      date = setUTCDay(date, value, options)
      date.setUTCHours(0, 0, 0, 0)
      return date
    }
  },

  isoDay: {
    priority: 50,
    set: function (date, value, options) {
      date = setUTCISODay(date, value, options)
      date.setUTCHours(0, 0, 0, 0)
      return date
    }
  },

  date: {
    priority: 50,
    set: function (date, value) {
      date.setUTCDate(value)
      date.setUTCHours(0, 0, 0, 0)
      return date
    }
  },

  dayOfYear: {
    priority: 50,
    set: function (date, value) {
      date.setUTCMonth(0, value)
      date.setUTCHours(0, 0, 0, 0)
      return date
    }
  },

  hours: {
    priority: 60,
    set: function (date, value) {
      date.setUTCHours(value, 0, 0, 0)
      return date
    }
  },

  minutes: {
    priority: 70,
    set: function (date, value) {
      date.setUTCMinutes(value, 0, 0)
      return date
    }
  },

  seconds: {
    priority: 80,
    set: function (date, value) {
      date.setUTCSeconds(value, 0)
      return date
    }
  },

  milliseconds: {
    priority: 90,
    set: function (date, value) {
      date.setUTCMilliseconds(value)
      return date
    }
  },

  timezone: {
    priority: 100,
    set: function (date, value) {
      return new Date(date.getTime() - value * MILLISECONDS_IN_MINUTE)
    }
  },

  timestamp: {
    priority: 110,
    set: function (date, value) {
      return new Date(value)
    }
  }
}

export default units
