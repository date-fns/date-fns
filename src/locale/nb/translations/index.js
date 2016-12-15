var lookupLocale = require('../../_lib/lookup_translation/index.js')

var translations = {
  MMM: ['jan.', 'feb.', 'mars', 'april', 'mai', 'juni', 'juli', 'aug.', 'sep.', 'okt.', 'nov.', 'des.'],
  MMMM: ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'],
  dd: ['sø', 'ma', 'ti', 'on', 'to', 'fr', 'lø'],
  ddd: ['sø.', 'ma.', 'ti.', 'on.', 'to.', 'fr.', 'lø.'],
  dddd: ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'],
  A: ['AM', 'PM'],
  a: ['am', 'pm'],
  aa: ['a.m.', 'p.m.']
}

module.exports = {
  getTranslation: lookupLocale(translations),
  translations: translations
}
