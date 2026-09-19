import { chromium } from '@playwright/test';
import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';

const PORT = 4174;
const BASE_URL = `http://127.0.0.1:${PORT}`;
const OUT_DIR = 'assets/cv';
const LANGS = ['es', 'en'];
const SERVER_TIMEOUT_MS = 10_000;
const POLL_MS = 200;

async function waitForServer(url) {
  const deadline = Date.now() + SERVER_TIMEOUT_MS;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // Connection refused until python's server binds the port; keep polling.
    }
    await new Promise((resolve) => setTimeout(resolve, POLL_MS));
  }
  throw new Error(`Static server did not start at ${url}`);
}

async function printCv(browser, lang) {
  const page = await browser.newPage();
  try {
    await page.goto(`${BASE_URL}/cv.html?lang=${lang}`, { waitUntil: 'networkidle' });
    await page.waitForSelector('body[data-ready="true"]');
    await page.evaluate(() => document.fonts.ready);
    const path = `${OUT_DIR}/andrey-aguirre-cv-${lang}.pdf`;
    await page.pdf({ path, format: 'A4', printBackground: true, preferCSSPageSize: true });
    console.log(`saved ${path}`);
  } finally {
    await page.close();
  }
}

const server = spawn('python3', ['-m', 'http.server', String(PORT), '--bind', '127.0.0.1'], { stdio: 'ignore' });
try {
  await waitForServer(`${BASE_URL}/cv.html`);
  await mkdir(OUT_DIR, { recursive: true });
  const browser = await chromium.launch();
  try {
    for (const lang of LANGS) await printCv(browser, lang);
  } finally {
    await browser.close();
  }
} finally {
  server.kill();
}
