var isFuture = require('../is_future');

describe('isFuture', function() {
  beforeEach(function() {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25).getTime()
    );
  });

  afterEach(function() {
    this.clock.restore();
  });

  it('returns true if passed date is future', function() {
    var result = isFuture(new Date(2014, 9 /* Oct */, 31));
    expect(result).to.be.true;
  });

  it('returns true if passed date is past', function() {
    var result = isFuture(new Date(2014, 8 /* Sep */, 1));
    expect(result).to.be.false;
  });

  it('returns true if passed date is current date', function() {
    var result = isFuture(new Date(2014, 8 /* Sep */, 25));
    expect(result).to.be.false;
  });

  it('allows to pass string', function() {
    var result = isFuture(new Date(2014, 9 /* Oct */, 31).toISOString());
    expect(result).to.be.true;
  });
});


