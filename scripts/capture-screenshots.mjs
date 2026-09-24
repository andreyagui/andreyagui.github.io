import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

const OUT_DIR = 'assets/images/projects';
const VIEWPORT = { width: 1440, height: 900 };
const SETTLE_MS = 1500;
const TARGETS = [
  { name: 'rentify', url: 'https://www.rentifycr.com' },
  { name: 'nexora', url: 'https://www.nexoragents.com' },
  { name: 'hecbox', url: 'https://www.hecboxcr.com' },
  { name: 'kardex', url: 'https://www.kardexapp.com/es' },
];

async function capture(browser, { name, url }) {
  const page = await browser.newPage({ viewport: VIEWPORT });
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45_000 });
    await page.keyboard.press('Escape');
    await page.waitForTimeout(SETTLE_MS);
    const path = `${OUT_DIR}/${name}.jpg`;
    await page.screenshot({ path, type: 'jpeg', quality: 80 });
    console.log(`saved ${path}`);
  } finally {
    await page.close();
  }
}

await mkdir(OUT_DIR, { recursive: true });
const browser = await chromium.launch();
try {
  for (const target of TARGETS) await capture(browser, target);
} finally {
  await browser.close();
}
