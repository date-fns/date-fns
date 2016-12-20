var TIME_DESIGNATOR = 'T';

function findUnit (stringComponent, unit) {
  const matchedUnit = stringComponent
    .toUpperCase()
    .match(new RegExp('[+,-]?[0-9]+(\\.[0-9]+)?' + unit));

  if (!matchedUnit) { return 0; }
  return parseFloat(matchedUnit[0].slice(0, -1));
}

function extractTimeComponent (isoDuration) {
  return isoDuration.split(TIME_DESIGNATOR)[1] || ''
}

function getSeconds (dirtyDuration) {
  var timeComponent = extractTimeComponent(dirtyDuration)
  return findUnit(timeComponent, 'S')
}

module.exports = getSeconds
