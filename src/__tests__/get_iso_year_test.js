var getISOYear = require('../get_iso_year');

describe('getISOYear', function() {
  it('returns ISO week-numbering year of given date', function() {
    var result = getISOYear(new Date(2007, 11 /* Dec */, 31));
    expect(result).to.equal(2008);
  });

  it('allows to pass string', function() {
    var result = getISOYear(new Date(2005, 0 /* Jan */, 1).toISOString());
    expect(result).to.equal(2004);
  });
});

