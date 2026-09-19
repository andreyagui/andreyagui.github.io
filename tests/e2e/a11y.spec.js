import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for (const theme of ['dark', 'light']) {
  test(`no WCAG 2.1 A/AA violations in the ${theme} theme`, async ({ page }) => {
    await page.addInitScript((value) => localStorage.setItem('theme', value), theme);
    await page.goto('/');
    await expect(page.locator('#contact h2')).toBeVisible();
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
    expect(results.violations.map((v) => `${v.id} (${v.nodes.length}): ${v.help}`)).toEqual([]);
  });
}

test('sharing metadata is present', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://andreyagui.github.io/');
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', 'https://andreyagui.github.io/assets/images/og-image.jpg');
  await expect(page.locator('link[rel="icon"]')).toHaveAttribute('href', 'assets/icons/favicon.svg');
});

test('favicon and social image are served', async ({ request }) => {
  expect((await request.get('/assets/icons/favicon.svg')).ok()).toBe(true);
  expect((await request.get('/assets/images/og-image.jpg')).ok()).toBe(true);
});
