import { describe, it, expect } from "vitest";
import { hasIndenticalCalander } from "./index";

describe('hasIdenticalCalander', () => {
    it('checking following years has identical calander', () => {
        
        expect(hasIndenticalCalander(new Date(1996, 1, 23))).toEqual(true);
        
        expect(hasIndenticalCalander(new Date(2028, 4, 12), new Date(2000, 0, 1))).toEqual(true);
        
        expect(hasIndenticalCalander(new Date(2000, 0, 1), new Date(2001, 0, 1))).toEqual(false);
        
        expect(hasIndenticalCalander(new Date(1970, 0, 1), new Date(1976, 0, 1))).toEqual(false);
        
        expect(hasIndenticalCalander(new Date(1970, 3, 10))).toEqual(false);
        
        expect(hasIndenticalCalander(new Date(2025, 6, 1), new Date(2026, 0, 1))).toEqual(false);
    
    });

    it('return false for invalid dates', () => {
        expect(hasIndenticalCalander(new Date(NaN), new Date(NaN))).toEqual(false);
    });
});