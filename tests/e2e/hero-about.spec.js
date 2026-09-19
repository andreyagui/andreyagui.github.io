import { test, expect } from '@playwright/test';

test('hero shows name, role, photo and both calls to action', async ({ page }) => {
  await page.goto('/');
  const hero = page.locator('#hero');
  await expect(hero.locator('h1')).toHaveText('Andrey Aguirre Obregón');
  await expect(hero).toContainText('Ingeniero de Software Senior');
  const photo = hero.locator('img');
  await expect(photo).toHaveAttribute('alt', /Andrey Aguirre/);
  await expect.poll(() => photo.evaluate((img) => img.naturalWidth)).toBeGreaterThan(0);
  await expect(hero.locator('a[href="#projects"]')).toBeVisible();
  await expect(hero.locator('a[data-cv-link]')).toHaveAttribute('href', 'assets/cv/andrey-aguirre-cv-es.pdf');
});

test('CV link follows the selected language', async ({ page }) => {
  await page.goto('/');
  await page.locator('#lang-toggle').click();
  await expect(page.locator('#hero a[data-cv-link]')).toHaveAttribute('href', 'assets/cv/andrey-aguirre-cv-en.pdf');
});

test('about shows two paragraphs and three highlights', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#about h2')).toHaveText('Perfil');
  await expect(page.locator('#about .about-text p')).toHaveCount(2);
  await expect(page.locator('#about .highlight')).toHaveCount(3);
});

test('page has no horizontal overflow', async ({ page }) => {
  await page.goto('/');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(0);
});
