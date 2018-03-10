const dtfCache = {}

export default function tzMakeDateTimeFormat (timeZone, locale) {
  if (locale) {
    // Trade-off between caching DTFs per locale too or generating new ones on demand for non en-US
    return newDTF(timeZone, locale)
  }
  if (!dtfCache[timeZone]) {
    dtfCache[timeZone] = newDTF(timeZone)
  }
  return dtfCache[timeZone]
}

function newDTF (timeZone, locale) {
  // Use en-US as a fallback against bad locales
  return new Intl.DateTimeFormat(locale ? [locale.code, 'en-US'] : 'en-US', {
    hour12: false,
    timeZone: timeZone,
    timeZoneName: 'short',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}
