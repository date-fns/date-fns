var lookupLocale = require('../../_lib/lookup_translation/index.js')

var translations = {
  MMM: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juill.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
  MMMM: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
  dd: ['di', 'lu', 'ma', 'me', 'je', 've', 'sa'],
  ddd: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
  dddd: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
  A: ['AM', 'PM'],
  a: ['am', 'pm'],
  aa: ['du matin', 'de l’après-midi', 'du soir']
}

module.exports = {
  getTranslation: lookupLocale(translations),
  translations: translations
}
