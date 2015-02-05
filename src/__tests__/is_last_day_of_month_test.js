var isLastDayOfMonth = require('../is_last_day_of_month');

describe('isLastDayOfMonth', function() {
  it('returns true if passed is last day of month', function() {
    var result = isLastDayOfMonth(new Date(2014, 9 /* Oct */, 31));
    expect(result).to.be.true;
  });

  it('returns true if passed is not last day of month', function() {
    var result = isLastDayOfMonth(new Date(2014, 9 /* Oct */, 30));
    expect(result).to.be.false;
  });

  it('allows to pass string', function() {
    var date = new Date(2014, 9 /* Oct */, 31).toISOString();
    var result = isLastDayOfMonth(date);
    expect(result).to.be.true;
  });

  it('allows to pass timestamp', function() {
    var date = new Date(2014, 9 /* Oct */, 31).getTime();
    var result = isLastDayOfMonth(date);
    expect(result).to.be.true;
  });
});

