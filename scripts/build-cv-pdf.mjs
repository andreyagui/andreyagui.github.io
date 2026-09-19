import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
import { startStaticServer } from './lib/static-server.mjs';

const PORT = 4174;
const OUT_DIR = 'assets/cv';
const LANGS = ['es', 'en'];

async function printCv(browser, baseUrl, lang) {
  const page = await browser.newPage();
  try {
    await page.goto(`${baseUrl}/cv.html?lang=${lang}`, { waitUntil: 'networkidle' });
    await page.waitForSelector('body[data-ready="true"]');
    await page.evaluate(() => document.fonts.ready);
    const path = `${OUT_DIR}/andrey-aguirre-cv-${lang}.pdf`;
    await page.pdf({ path, format: 'A4', printBackground: true, preferCSSPageSize: true });
    console.log(`saved ${path}`);
  } finally {
    await page.close();
  }
}

const server = await startStaticServer(PORT);
try {
  await mkdir(OUT_DIR, { recursive: true });
  const browser = await chromium.launch();
  try {
    for (const lang of LANGS) await printCv(browser, server.baseUrl, lang);
  } finally {
    await browser.close();
  }
} finally {
  server.stop();
}
