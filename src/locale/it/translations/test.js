var assert = require('power-assert')
var translations = require('./')

describe('it translations', function () {
  it('Returns the correct dictionary', function () {
    var expected = {
      MMM: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
      MMMM: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'],
      dd: ['do', 'lu', 'ma', 'me', 'gi', 've', 'sa'],
      ddd: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'],
      dddd: ['domenica', 'lunedí', 'martedí', 'mercoledí', 'giovedí', 'venerdí', 'sabato'],
      A: ['AM', 'PM'],
      a: ['am', 'pm'],
      aa: ['a.m.', 'p.m.']
    }
    assert.deepEqual(expected, translations.translations);
  });
});
