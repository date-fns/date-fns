import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/**/test.ts'],
    // include: ['src/addDays/test.ts','src/subDays/test.ts','src/addWeeks/test.ts','src/subWeeks/test.ts','src/eachWeekOfInterval/test.ts','src/nextMonday/test.ts','src/weekStartsOn/test.ts','src/getISOWeeksInYear/test.ts','src/isExists/test.ts','src/isEqual/test.ts','src/isDate/test.ts','src/max/test.ts'],
    browser: {
      // Enable it via --browser
      // enabled: true,
      name: 'chromium',
      provider: 'playwright',
      headless: true,
    },
  },
})
