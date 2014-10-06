var isWeekend = require('../is_weekend');

describe('isWeekend', function() {
  it('returns true if passed is weekend', function() {
    var result = isWeekend(new Date(2014, 9 /* starts from 0 */, 5));
    expect(result).to.be.true;
  });

  it('returns false if passed date is not weekend', function() {
    var result = isWeekend(new Date(2014, 9 /* starts from 0 */, 6));
    expect(result).to.be.false;
  });

  it('allows to pass string', function() {
    var result = isWeekend(new Date(2014, 9 /* starts from 0 */, 5).toString());
    expect(result).to.be.true;
  });
});

