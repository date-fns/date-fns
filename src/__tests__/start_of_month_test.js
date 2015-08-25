var startOfMonth = require('../start_of_month');

describe('startOfMonth', function() {
  it('returns date with time setted to 00:00:00 and date setted to first day of month', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    var result = startOfMonth(date);
    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 1));
  });

  it('accepts string', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).toISOString();
    var result = startOfMonth(date);
    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 1));
  });

  it('accepts timestamp', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
    var result = startOfMonth(date);
    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 1));
  });

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    startOfMonth(date);
    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  });
});

