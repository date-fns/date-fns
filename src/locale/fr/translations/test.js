var assert = require('power-assert')
var translations = require('./')

describe('fr translations', function () {
  it('Returns the correct dictionary', function () {
    var expected = {
      MMM: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juill.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
      MMMM: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
      dd: ['di', 'lu', 'ma', 'me', 'je', 've', 'sa'],
      ddd: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
      dddd: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
      A: ['AM', 'PM'],
      a: ['am', 'pm'],
      aa: ['du matin', 'de l’après-midi', 'du soir']
    }
    assert.deepEqual(expected, translations.translations);
  });
});
