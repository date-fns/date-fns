/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import type { FormatDistanceFn } from "../locale/types.js";
import { formatDistance } from "./index.js";

describe("formatDistance", () => {
  describe("seconds", () => {
    describe("when the includeSeconds option is true", () => {
      it("less than 5 seconds", () => {
        const result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 3),
          { includeSeconds: true },
        );
        assert(result === "less than 5 seconds");
      });

      it("less than 10 seconds", () => {
        const result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 7),
          { includeSeconds: true },
        );
        assert(result === "less than 10 seconds");
      });

      it("less than 20 seconds", () => {
        const result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 15),
          { includeSeconds: true },
        );
        assert(result === "less than 20 seconds");
      });

      it("half a minute", () => {
        const result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 25),
          { includeSeconds: true },
        );
        assert(result === "half a minute");
      });

      it("less than a minute", () => {
        const result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 45),
          { includeSeconds: true },
        );
        assert(result === "less than a minute");
      });

      it("1 minute", () => {
        const result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 33, 0),
          { includeSeconds: true },
        );
        assert(result === "1 minute");
      });
    });
  });

  describe("minutes", () => {
    it("less than a minute", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 32, 20),
      );
      assert(result === "less than a minute");
    });

    it("1 minute", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 32, 50),
      );
      assert(result === "1 minute");
    });

    it("n minutes", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 34, 50),
      );
      assert(result === "3 minutes");
    });
  });

  describe("hours", () => {
    it("about 1 hour", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 11, 32, 0),
      );
      assert(result === "about 1 hour");
    });

    it("about n hours", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 13, 32, 0),
      );
      assert(result === "about 3 hours");
    });
  });

  describe("days", () => {
    it("1 day", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 5, 10, 32, 0),
      );
      assert(result === "1 day");
    });

    it("n days", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 7, 10, 32, 0),
      );
      assert(result === "3 days");
    });
  });

  describe("months", () => {
    it("about 1 month", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 4, 4, 10, 32, 0),
      );
      assert(result === "about 1 month");
    });

    it("n months", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 6, 4, 10, 32, 0),
      );
      assert(result === "3 months");
    });
  });

  describe("years", () => {
    it("about 1 year", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1987, 3, 4, 10, 32, 0),
      );
      assert(result === "about 1 year");
    });

    it("over 1 year", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1987, 9, 4, 10, 32, 0),
      );
      assert(result === "over 1 year");
    });

    it("almost n years", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1989, 2, 4, 10, 32, 0),
      );
      assert(result === "almost 3 years");
    });

    it("about n years", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1989, 3, 4, 10, 32, 0),
      );
      assert(result === "about 3 years");
    });

    it("over n years", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1989, 9, 4, 10, 32, 0),
      );
      assert(result === "over 3 years");
    });
  });

  it("accepts timestamps", () => {
    const result = formatDistance(
      new Date(1986, 3, 4, 10, 32, 0).getTime(),
      new Date(1986, 3, 4, 11, 32, 0).getTime(),
    );
    assert(result === "about 1 hour");
  });

  describe("when the addSuffix option is true", () => {
    it("adds a past suffix", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 32, 25),
        { includeSeconds: true, addSuffix: true },
      );
      assert(result === "half a minute ago");
    });

    it("adds a future suffix", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 11, 32, 0),
        new Date(1986, 3, 4, 10, 32, 0),
        { addSuffix: true },
      );
      assert(result === "in about 1 hour");
    });
  });

  describe("custom locale", () => {
    it("can be passed to the function", () => {
      const localizeDistance: FormatDistanceFn = (token, count, options) => {
        assert(token === "lessThanXSeconds");
        assert(count === 5);
        assert(options!.addSuffix === true);
        assert(options!.comparison! > 0);
        return "It works!";
      };

      const customLocale = {
        formatDistance: localizeDistance,
      };

      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 3),
        new Date(1986, 3, 4, 10, 32, 0),
        {
          includeSeconds: true,
          addSuffix: true,
          locale: customLocale,
        },
      );

      assert(result === "It works!");
    });
  });

  it("throws RangeError if the first date is `Invalid Date`", () => {
    assert.throws(
      formatDistance.bind(null, new Date(NaN), new Date(1986, 3, 7, 10, 32, 0)),
      RangeError,
    );
  });

  it("throws RangeError if the second date is `Invalid Date`", () => {
    assert.throws(
      formatDistance.bind(null, new Date(1986, 3, 4, 10, 32, 0), new Date(NaN)),
      RangeError,
    );
  });

  it("throws RangeError if the both dates are `Invalid Date`", () => {
    assert.throws(
      formatDistance.bind(null, new Date(NaN), new Date(NaN)),
      RangeError,
    );
  });
});
