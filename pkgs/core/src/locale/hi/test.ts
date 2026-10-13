import { describe, expect, it } from "vitest";
import { formatDistance } from "../../formatDistance/index.ts";
import { hi } from "./index.ts";

describe("hi locale - formatDistance", () => {
  const baseDate = new Date(2014, 6 /* Jul */, 2);

  describe("without suffix", () => {
    it("returns less than a minute for small distances", () => {
      const result = formatDistance(
        new Date(2014, 6 /* Jul */, 2, 0, 0, 15),
        baseDate,
        { locale: hi },
      );
      expect(result).toBe("१ मिनट से कम");
    });

    it("returns xMinutes for ~5 minutes", () => {
      const result = formatDistance(
        new Date(2014, 6 /* Jul */, 2, 0, 5),
        baseDate,
        { locale: hi },
      );
      expect(result).toBe("५ मिनट");
    });

    it("returns singular घंटा for exactly 1 hour without suffix", () => {
      const result = formatDistance(
        new Date(2014, 6 /* Jul */, 2, 1, 0),
        baseDate,
        { locale: hi },
      );
      expect(result).toBe("लगभग १ घंटा");
    });

    it("returns singular महीना for exactly 1 month without suffix", () => {
      const result = formatDistance(
        new Date(2014, 7 /* Aug */, 2),
        baseDate,
        { locale: hi },
      );
      expect(result).toBe("लगभग १ महीना");
    });
  });

  describe("addSuffix: past (पहले)", () => {
    it("appends पहले for past dates", () => {
      const result = formatDistance(
        new Date(2014, 6 /* Jul */, 2, 0, 5),
        new Date(2014, 6 /* Jul */, 2, 0, 10),
        { locale: hi, addSuffix: true },
      );
      expect(result).toBe("५ मिनट पहले");
    });

    it("inflects घंटा -> घंटे with past suffix", () => {
      const result = formatDistance(
        baseDate,
        new Date(2014, 6 /* Jul */, 2, 1, 0),
        { locale: hi, addSuffix: true },
      );
      expect(result).toBe("लगभग १ घंटे पहले");
    });

    it("inflects महीना -> महीने with past suffix", () => {
      const result = formatDistance(
        baseDate,
        new Date(2014, 7 /* Aug */, 2),
        { locale: hi, addSuffix: true },
      );
      expect(result).toBe("लगभग १ महीने पहले");
    });
  });

  describe("addSuffix: future (में)", () => {
    it("appends में with a space for future dates", () => {
      const result = formatDistance(
        new Date(2014, 6 /* Jul */, 2, 0, 10),
        new Date(2014, 6 /* Jul */, 2, 0, 5),
        { locale: hi, addSuffix: true },
      );
      expect(result).toBe("५ मिनट में");
    });

    it("inflects घंटा -> घंटे with future suffix", () => {
      const result = formatDistance(
        new Date(2014, 6 /* Jul */, 2, 1, 0),
        baseDate,
        { locale: hi, addSuffix: true },
      );
      expect(result).toBe("लगभग १ घंटे में");
    });

    it("inflects महीना -> महीने with future suffix", () => {
      const result = formatDistance(
        new Date(2014, 7 /* Aug */, 2),
        baseDate,
        { locale: hi, addSuffix: true },
      );
      expect(result).toBe("लगभग १ महीने में");
    });
  });
});
