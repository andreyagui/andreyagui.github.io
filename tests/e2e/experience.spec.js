import { test, expect } from '@playwright/test';

test('experience lists the five roles, newest first', async ({ page }) => {
  await page.goto('/');
  const companies = page.locator('#experience .timeline-company');
  await expect(companies).toHaveCount(5);
  await expect(companies.first()).toHaveText('Grupo Malengo');
  await expect(companies.last()).toHaveText('Exdesa');
});

test('experience switches language', async ({ page }) => {
  await page.goto('/');
  await page.locator('#lang-toggle').click();
  await expect(page.locator('#experience h2')).toHaveText('Experience');
  await expect(page.locator('#experience .timeline-period').first()).toContainText('Present');
});
