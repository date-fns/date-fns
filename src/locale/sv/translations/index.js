var lookupLocale = require('../../_lib/lookup_translation/index.js')

var translations = {
  MMM: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
  MMMM: ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'],
  dd: ['sö', 'må', 'ti', 'on', 'to', 'fr', 'lö'],
  ddd: ['sön', 'mån', 'tis', 'ons', 'tor', 'fre', 'lör'],
  dddd: ['söndag', 'måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag'],
  aa: ['f.m.', 'e.m.']
}

module.exports = {
  getTranslation: lookupLocale(translations),
  translations: translations
}
