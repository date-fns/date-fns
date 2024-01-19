import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/**/test.ts'],
    browser: {
      // Enable it via --browser
      // enabled: true,
      name: 'chromium',
      provider: 'playwright',
      headless: true,
    },
  },
})
