function toUnit (value, key) {
  if (value === 0) { return '' }
  return value + key
}

function toIso (duration) {
  var dateComponent = [
    'P',
    toUnit(duration.years, 'Y'),
    toUnit(duration.months, 'M'),
    toUnit(duration.weeks, 'W'),
    toUnit(duration.days, 'D')
  ].join('')

  var timeComponent = [
    toUnit(duration.hours, 'H'),
    toUnit(duration.minutes, 'M'),
    toUnit(duration.seconds, 'S')
  ].join('')

  if (timeComponent === '') { return dateComponent }
  return dateComponent + 'T' + timeComponent
}

module.exports = toIso
