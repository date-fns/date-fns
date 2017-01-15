import setISOYear from '../../../set_iso_year/index.js'
import startOfISOYear from '../../../start_of_iso_year/index.js'
import setISOWeek from '../../../set_iso_week/index.js'
import startOfISOWeek from '../../../start_of_iso_week/index.js'
import setDay from '../../../set_day/index.js'
import setISODay from '../../../set_iso_day/index.js'

var units = {
  year: {
    priority: 10,
    set: function (date, value) {
      date.setFullYear(value, 0, 1)
      date.setHours(0, 0, 0, 0)
      return date
    }
  },

  isoYear: {
    priority: 10,
    set: function (date, value) {
      return startOfISOYear(setISOYear(date, value))
    }
  },

  quarter: {
    priority: 20,
    set: function (date, value) {
      date.setMonth((value - 1) * 3, 1)
      date.setHours(0, 0, 0, 0)
      return date
    }
  },

  month: {
    priority: 30,
    set: function (date, value) {
      date.setMonth(value, 1)
      date.setHours(0, 0, 0, 0)
      return date
    }
  },

  isoWeek: {
    priority: 40,
    set: function (date, value) {
      return startOfISOWeek(setISOWeek(date, value))
    }
  },

  day: {
    priority: 50,
    set: function (date, value) {
      date = setDay(date, value)
      date.setHours(0, 0, 0, 0)
      return date
    }
  },

  isoDay: {
    priority: 50,
    set: function (date, value) {
      date = setISODay(date, value)
      date.setHours(0, 0, 0, 0)
      return date
    }
  },

  date: {
    priority: 50,
    set: function (date, value) {
      date.setDate(value)
      date.setHours(0, 0, 0, 0)
      return date
    }
  },

  dayOfYear: {
    priority: 50,
    set: function (date, value) {
      date.setMonth(0, value)
      date.setHours(0, 0, 0, 0)
      return date
    }
  },

  hours: {
    priority: 60,
    set: function (date, value) {
      date.setHours(value, 0, 0, 0)
      return date
    }
  },

  minutes: {
    priority: 70,
    set: function (date, value) {
      date.setMinutes(value, 0, 0)
      return date
    }
  },

  seconds: {
    priority: 80,
    set: function (date, value) {
      date.setSeconds(value, 0)
      return date
    }
  },

  milliseconds: {
    priority: 90,
    set: function (date, value) {
      date.setMilliseconds(value)
      return date
    }
  },

  timezone: {
    priority: 100,
    set: function (date, value) {
      var minutes = date.getMinutes()
      var currentTimezoneOffset = date.getTimezoneOffset()
      var offset = currentTimezoneOffset + value
      date.setMinutes(minutes - offset)
      return date
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
