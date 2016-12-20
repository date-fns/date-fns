var TIME_DESIGNATOR = 'T'

function extractTimeComponent (isoDuration) {
  return isoDuration.split(TIME_DESIGNATOR)[1] || ''
}

function getTimeUnit (dirtyDuration, unit) {
  var timeComponent = extractTimeComponent(dirtyDuration)
  var matchedUnit = timeComponent
    .toUpperCase()
    .match(new RegExp('[+,-]?[0-9]+(\\.[0-9]+)?' + unit))

  if (!matchedUnit) { return 0 }
  return parseFloat(matchedUnit[0].slice(0, -1))
}

module.exports = getTimeUnit
