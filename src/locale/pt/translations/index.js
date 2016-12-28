var lookupLocale = require('../../_lib/lookup_translation/index.js')

var translations = {
  MMM: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
  MMMM: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
  dd: ['do', 'se', 'te', 'qa', 'qi', 'se', 'sa'],
  ddd: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
  dddd: ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'],
  A: ['AM', 'PM'],
  a: ['am', 'pm'],
  aa: ['a.m.', 'p.m.']
}

module.exports = {
  getTranslation: lookupLocale(translations),
  translations: translations
}
