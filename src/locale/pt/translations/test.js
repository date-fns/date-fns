var assert = require('power-assert')
var translations = require('./')

describe('pt translations', function () {
  it('Returns the correct dictionary', function () {
    var expected = {
      MMM: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
      MMMM: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
      dd: ['do', 'se', 'te', 'qa', 'qi', 'se', 'sa'],
      ddd: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
      dddd: ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'],
      A: ['AM', 'PM'],
      a: ['am', 'pm'],
      aa: ['a.m.', 'p.m.']
    }
    assert.deepEqual(expected, translations.translations);
  });
});
