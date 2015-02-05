var isWithinRange = require('../is_within_range');

describe('isWithinRange', function() {
  it('returns true if passed date within the range', function() {
    var result = isWithinRange(
      new Date(2014, 9 /* Oct */, 31),
      new Date(2014, 8 /* Sep */, 1),
      new Date(2014, 11 /* Dec */, 31)
    );
    expect(result).to.be.true;
  });

  it('returns true if passed date has the same time as left boundary', function() {
    var result = isWithinRange(
      new Date(2014, 8 /* Sep */, 1),
      new Date(2014, 8 /* Sep */, 1),
      new Date(2014, 11 /* Dec */, 31)
    );
    expect(result).to.be.true;
  });

  it('returns true if passed date has the same time as right boundary', function() {
    var result = isWithinRange(
      new Date(2014, 11 /* Dec */, 31),
      new Date(2014, 8 /* Sep */, 1),
      new Date(2014, 11 /* Dec */, 31)
    );
    expect(result).to.be.true;
  });

  it('returns false if passed date outside of the range', function() {
    var result = isWithinRange(
      new Date(2014, 1 /* Feb */, 11),
      new Date(2014, 8 /* Sep */, 1),
      new Date(2014, 11 /* Dec */, 31)
    );
    expect(result).to.be.false;
  });

  it('allows to pass string', function() {
    var result = isWithinRange(
      new Date(2014, 9 /* Oct */, 31).toISOString(),
      new Date(2014, 8 /* Sep */, 1).toISOString(),
      new Date(2014, 11 /* Dec */, 31).toISOString()
    );
    expect(result).to.be.true;
  });

  it('allows to pass timestamp', function() {
    var result = isWithinRange(
      new Date(2014, 9 /* Oct */, 31).getTime(),
      new Date(2014, 8 /* Sep */, 1).getTime(),
      new Date(2014, 11 /* Dec */, 31).getTime()
    );
    expect(result).to.be.true;
  });
});

