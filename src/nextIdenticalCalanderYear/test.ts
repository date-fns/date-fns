import { describe, expect, it } from "vitest";
import { nextIdenticalCalanderYear } from "./index.js";

describe('nextIdenticalCalanderYear', () => {
    it("returns the following next calander year for given various dates", () => {
        expect(nextIdenticalCalanderYear(new Date(1900, 10, 20))).toEqual(1906);

        expect(nextIdenticalCalanderYear(new Date(1950, 3, 17))).toEqual(1961);

        expect(nextIdenticalCalanderYear(new Date(1999, 0, 17))).toEqual(2010);

        expect(nextIdenticalCalanderYear(new Date(2000, 1, 17))).toEqual(2028);

        expect(nextIdenticalCalanderYear(new Date(2020, 2, 23))).toEqual(2048);

        expect(nextIdenticalCalanderYear(new Date(2021, 3, 22))).toEqual(2027);

        expect(nextIdenticalCalanderYear(new Date(2022, 11, 21))).toEqual(2033);

        expect(nextIdenticalCalanderYear(new Date(2023, 5, 20))).toEqual(2034);

        expect(nextIdenticalCalanderYear(new Date(2024, 6, 19))).toEqual(2052);

        expect(nextIdenticalCalanderYear(new Date(2025, 7, 18))).toEqual(2031);

    });
    it("returns NaN if the given date is invalid", () => {
        const result = nextIdenticalCalanderYear(new Date(NaN));
        expect(isNaN(result)).toBe(true);
    });
});