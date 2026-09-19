import { defineConfig, devices } from '@playwright/test';

const LOCAL_URL = 'http://127.0.0.1:4173';
const baseURL = process.env.BASE_URL ?? LOCAL_URL;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'list',
  // Headless Chromium reports en-US, which would auto-switch the site to English.
  use: { baseURL, locale: 'es-CR' },
  webServer: process.env.BASE_URL ? undefined : {
    command: 'python3 -m http.server 4173 --bind 127.0.0.1',
    url: `${LOCAL_URL}/index.html`,
    reuseExistingServer: true,
    timeout: 15_000,
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 7'] } },
  ],
});
