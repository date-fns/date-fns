var assert = require('power-assert')
var translations = require('./')

describe('fil translations', function () {
  it('Returns the correct dictionary', function () {
    var expected = {
      MMM: ['Ene', 'Peb', 'Mar', 'Abr', 'May', 'Hun', 'Hul', 'Ago', 'Set', 'Okt', 'Nob', 'Dis'],
      MMMM: ['Enero', 'Pebrero', 'Marso', 'Abril', 'Mayo', 'Hunyo', 'Hulyo', 'Agosto', 'Setyembre', 'Oktubre', 'Nobyembre', 'Disyembre'],
      dd: ['Li', 'Lu', 'Ma', 'Mi', 'Hu', 'Bi', 'Sa'],
      ddd: ['Lin', 'Lun', 'Mar', 'Miy', 'Huw', 'Biy', 'Sab'],
      dddd: ['Linggo', 'Lunes', 'Martes', 'Miyerkules', 'Huwebes', 'Biyernes', 'Sabado'],
      A: ['NU', 'NT', 'NH', 'NG'],
      a: ['nu', 'nt', 'nh', 'ng'],
      aa: ['ng umaga', 'ng tanghali', 'ng hapon', 'ng gabi']
    }
    assert.deepEqual(expected, translations.translations);
  });
});
