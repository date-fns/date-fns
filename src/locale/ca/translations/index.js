var lookupLocale = require('../../_lib/lookup_translation/index.js')

var translations = {
  MMM: ['gen', 'feb', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'oct', 'nov', 'des'],
  MMMM: ['gener', 'febrer', 'març', 'abril', 'maig', 'juny', 'juliol', 'agost', 'setembre', 'octobre', 'novembre', 'desembre'],
  dd: ['dg', 'dl', 'dt', 'dc', 'dj', 'dv', 'ds'],
  ddd: ['dge', 'dls', 'dts', 'dcs', 'djs', 'dvs', 'dss'],
  dddd: ['diumenge', 'dilluns', 'dimarts', 'dimecres', 'dijous', 'divendres', 'dissabte'],
  A: ['AM', 'PM'],
  a: ['am', 'pm'],
  aa: ['a.m.', 'p.m.']
}

module.exports = {
  getTranslation: lookupLocale(translations),
  translations: translations
}
