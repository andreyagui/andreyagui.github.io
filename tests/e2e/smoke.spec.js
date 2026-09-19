import { test, expect } from '@playwright/test';

export const SECTION_IDS = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];

test('page loads with every section container', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Andrey Aguirre/);
  for (const id of SECTION_IDS) {
    await expect(page.locator(`section#${id}`)).toHaveCount(1);
  }
});

test('page loads without console errors', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (err) => errors.push(err.message));
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  expect(errors).toEqual([]);
});
