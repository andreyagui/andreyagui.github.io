import { test, expect } from '@playwright/test';

test('shows six featured projects and five others', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#projects .project-card')).toHaveCount(6);
  await expect(page.locator('#projects .other-card')).toHaveCount(5);
});

test('only live projects link out, in a new tab without opener', async ({ page }) => {
  await page.goto('/');
  const links = page.locator('#projects a.project-link');
  await expect(links).toHaveCount(4);
  await expect(links.nth(0)).toHaveAttribute('href', 'https://www.rentifycr.com');
  await expect(links.nth(1)).toHaveAttribute('href', 'https://www.nexoragents.com');
  await expect(links.nth(2)).toHaveAttribute('href', 'https://www.hecboxcr.com');
  await expect(links.nth(3)).toHaveAttribute('href', 'https://www.kardexapp.com/es');
  for (const link of await links.all()) {
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', /noopener/);
  }
});

test('no project links to a GitHub repository', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#projects a[href*="github.com"]')).toHaveCount(0);
});

test('every project image loads', async ({ page }) => {
  await page.goto('/');
  for (const img of await page.locator('#projects img').all()) {
    await img.scrollIntoViewIfNeeded();
    await expect.poll(() => img.evaluate((node) => node.naturalWidth)).toBeGreaterThan(0);
  }
});

test('projects built on open source credit their base framework', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#projects [data-project="roman"]')).toContainText('OpenClaw');
});
