var timeAgoInWords = require('../time_ago_in_words');

describe('timeAgoInWords', function() {
  beforeEach(function() {
    this.clock = sinon.useFakeTimers(
      new Date(1986, 3, 4, 10, 32, 0).getTime()
    );
  });

  afterEach(function() {
    this.clock.restore();
  });

  it('accepts string', function() {
    var result = timeAgoInWords(
      new Date(1986, 3, 4, 10, 31, 40)
    );
    expect(result).to.be.equal('less than a minute');
  });

  describe('seconds', function() {
    context('when includeSeconds option is true', function() {
      it('less than 5 seconds', function() {
        var result = timeAgoInWords(
          new Date(1986, 3, 4, 10, 31, 58), true
        );
        expect(result).to.be.equal('less than 5 seconds');
      });

      it('less than 10 seconds', function() {
        var result = timeAgoInWords(
          new Date(1986, 3, 4, 10, 31, 52), true
        );
        expect(result).to.be.equal('less than 10 seconds');
      });

      it('less than 20 seconds', function() {
        var result = timeAgoInWords(
          new Date(1986, 3, 4, 10, 31, 45), true
        );
        expect(result).to.be.equal('less than 20 seconds');
      });

      it('half a minute', function() {
        var result = timeAgoInWords(
          new Date(1986, 3, 4, 10, 31, 35), true
        );
        expect(result).to.be.equal('half a minute');
      });

      it('less than a minute', function() {
        var result = timeAgoInWords(
          new Date(1986, 3, 4, 10, 31, 15), true
        );
        expect(result).to.be.equal('less than a minute');
      });

      it('1 minute', function() {
        var result = timeAgoInWords(
          new Date(1986, 3, 4, 10, 31, 0), true
        );
        expect(result).to.be.equal('1 minute');
      });
    });
  });

  describe('minutes', function() {
    it('less than a minute', function() {
      var result = timeAgoInWords(
        new Date(1986, 3, 4, 10, 31, 40)
      );
      expect(result).to.be.equal('less than a minute');
    });

    it('1 minute', function() {
      var result = timeAgoInWords(
        new Date(1986, 3, 4, 10, 31, 10)
      );
      expect(result).to.be.equal('1 minute');
    });

    it('n minutes', function() {
      var result = timeAgoInWords(
        new Date(1986, 3, 4, 10, 29, 10)
      );
      expect(result).to.be.equal('3 minutes');
    });
  });

  describe('hours', function() {
    it('about 1 hour', function() {
      var result = timeAgoInWords(
        new Date(1986, 3, 4, 9, 32, 0)
      );
      expect(result).to.be.equal('about 1 hour');
    });

    it('about n hours', function() {
      var result = timeAgoInWords(
        new Date(1986, 3, 4, 7, 32, 0)
      );
      expect(result).to.be.equal('about 3 hours');
    });
  });

  describe('days', function() {
    it('1 day', function() {
      var result = timeAgoInWords(
        new Date(1986, 3, 3, 10, 32, 0)
      );
      expect(result).to.be.equal('1 day');
    });

    it('n days', function() {
      var result = timeAgoInWords(
        new Date(1986, 3, 1, 10, 32, 0)
      );
      expect(result).to.be.equal('3 days');
    });
  });

  describe('months', function() {
    it('about 1 month', function() {
      var result = timeAgoInWords(
        new Date(1986, 2, 4, 10, 32, 0)
      );
      expect(result).to.be.equal('about 1 month');
    });

    it('n months', function() {
      var result = timeAgoInWords(
        new Date(1986, 0, 4, 10, 32, 0)
      );
      expect(result).to.be.equal('3 months');
    });
  });

  describe('years', function() {
    it('about 1 year', function() {
      var result = timeAgoInWords(
        new Date(1985, 3, 4, 10, 32, 0)
      );
      expect(result).to.be.equal('about 1 year');
    });

    it('over 1 year', function() {
      var result = timeAgoInWords(
        new Date(1984, 10, 4, 10, 32, 0)
      );
      expect(result).to.be.equal('over 1 year');
    });

    it('almost n years', function() {
      var result = timeAgoInWords(
        new Date(1983, 4, 4, 10, 32, 0)
      );
      expect(result).to.be.equal('almost 3 years');
    });

    it('about n years', function() {
      var result = timeAgoInWords(
        new Date(1983, 3, 4, 10, 32, 0)
      );
      expect(result).to.be.equal('about 3 years');
    });

    it('over n years', function() {
      var result = timeAgoInWords(
        new Date(1982, 10, 4, 10, 32, 0)
      );
      expect(result).to.be.equal('over 3 years');
    });
  });
});

