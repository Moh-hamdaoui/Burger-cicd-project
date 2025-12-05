import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',      
  testIgnore: [
    '**/tests/unit/**',        
    '**/tests/integration/**',
  ],
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
  },
  reporter: [['list']],
});
