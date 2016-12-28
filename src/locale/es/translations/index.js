var lookupLocale = require('../../_lib/lookup_translation/index.js')

var translations = {
  MMM: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
  MMMM: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
  dd: ['do', 'lu', 'ma', 'mi', 'ju', 'vi', 'sa'],
  ddd: ['dom', 'lun', 'mar', 'mie', 'jue', 'vie', 'sáb'],
  dddd: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
  A: ['AM', 'PM'],
  a: ['am', 'pm'],
  aa: ['a.m.', 'p.m.']
}

module.exports = {
  getTranslation: lookupLocale(translations),
  translations: translations
}
