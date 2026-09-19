import { chromium } from '@playwright/test';
import { startStaticServer } from './lib/static-server.mjs';

const PORT = 4175;
const OG_SIZE = { width: 1200, height: 630 };
const OUT_PATH = 'assets/images/og-image.jpg';

const server = await startStaticServer(PORT);
try {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: OG_SIZE, locale: 'es-CR' });
    await page.goto(`${server.baseUrl}/`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: OUT_PATH, type: 'jpeg', quality: 85 });
    console.log(`saved ${OUT_PATH}`);
  } finally {
    await browser.close();
  }
} finally {
  server.stop();
}
