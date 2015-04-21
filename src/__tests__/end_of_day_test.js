var endOfDay = require('../end_of_day');

describe('endOfDay', function() {
  it('returns date with time setted to 23:59:59.999', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    var result = endOfDay(date);
    expect(result).to.be.eql(
      new Date(2014, 8 /* Sep */, 2, 23, 59, 59, 999)
    );
  });

  it('accepts string', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).toISOString();
    var result = endOfDay(date);
    expect(result).to.be.eql(
      new Date(2014, 8 /* Sep */, 2, 23, 59, 59, 999)
    );
  });

  it('accepts timestamp', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
    var result = endOfDay(date);
    expect(result).to.be.eql(
      new Date(2014, 8 /* Sep */, 2, 23, 59, 59, 999)
    );
  });

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    endOfDay(date);
    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  });
});

