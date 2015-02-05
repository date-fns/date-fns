var isAfter = require('../is_after');

describe('isAfter', function() {
  it('returns true if first date is after second one ', function() {
    var result = isAfter(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11)
    );
    expect(result).to.be.true;
  });

  it('returns false if first date is before second one ', function() {
    var result = isAfter(
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10)
    );
    expect(result).to.be.false;
  });

  it('returns false if first date is equal to second one ', function() {
    var result = isAfter(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1989, 6 /* Jul */, 10)
    );
    expect(result).to.be.false;
  });

  it('allows to pass string', function() {
    var result = isAfter(
      new Date(1989, 6 /* Jul */, 10).toISOString(),
      new Date(1987, 1 /* Feb */, 11).toISOString()
    );
    expect(result).to.be.true;
  });

  it('allows to pass timestamp', function() {
    var result = isAfter(
      new Date(1989, 6 /* Jul */, 10).getTime(),
      new Date(1987, 1 /* Feb */, 11).getTime()
    );
    expect(result).to.be.true;
  });
});

