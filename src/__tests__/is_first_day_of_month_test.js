var isFirstDayOfMonth = require('../is_first_day_of_month');

describe('isFirstDayOfMonth', function() {
  it('returns true if passed is last day of month', function() {
    var result = isFirstDayOfMonth(new Date(2014, 9 /* Oct */, 1));
    expect(result).to.be.true;
  });

  it('returns true if passed is not last day of month', function() {
    var result = isFirstDayOfMonth(new Date(2014, 9 /* Oct */, 2));
    expect(result).to.be.false;
  });

  it('allows to pass string', function() {
    var date = new Date(2014, 9 /* Oct */, 1).toISOString();
    var result = isFirstDayOfMonth(date);
    expect(result).to.be.true;
  });

  it('allows to pass timestamp', function() {
    var date = new Date(2014, 9 /* Oct */, 1).getTime();
    var result = isFirstDayOfMonth(date);
    expect(result).to.be.true;
  });
});

