import { test, expect } from '@playwright/test';

test('mobile menu opens, closes on link click and on Escape', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'mobile-only behavior');
  await page.goto('/');
  const toggle = page.locator('#menu-toggle');
  const menu = page.locator('#nav-menu');
  await expect(menu).toBeHidden();
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await expect(menu).toBeVisible();
  await menu.locator('a[data-section="projects"]').click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(menu).toBeHidden();
  await toggle.click();
  await page.keyboard.press('Escape');
  await expect(menu).toBeHidden();
  await expect(toggle).toBeFocused();
});

test('desktop shows nav links inline without a menu button', async ({ page, isMobile }) => {
  test.skip(isMobile, 'desktop-only layout');
  await page.goto('/');
  await expect(page.locator('#menu-toggle')).toBeHidden();
  await expect(page.locator('a.nav-link[data-section="projects"]')).toBeVisible();
});

test('scroll spy marks only the section in view', async ({ page }) => {
  await page.goto('/');
  await page.addStyleTag({ content: 'main > .section { min-height: 100vh; }' });
  await page.evaluate(() => document.getElementById('skills').scrollIntoView({ behavior: 'instant' }));
  await expect(page.locator('a.nav-link[data-section="skills"]')).toHaveAttribute('aria-current', 'true');
  await expect(page.locator('a.nav-link[aria-current="true"]')).toHaveCount(1);
});
