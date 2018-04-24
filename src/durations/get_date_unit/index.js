var TIME_DESIGNATOR = 'T'

function extractDateComponent (isoDuration) {
  return isoDuration.split(TIME_DESIGNATOR)[0] || ''
}

function getDateUnit (dirtyDuration, unit) {
  var dateComponent = extractDateComponent(dirtyDuration)
  var matchedUnit = dateComponent
    .toUpperCase()
    .match(new RegExp('[+,-]?[0-9]+(\\.[0-9]+)?' + unit))

  if (!matchedUnit) { return 0 }
  return parseFloat(matchedUnit[0].slice(0, -1))
}

module.exports = getDateUnit
