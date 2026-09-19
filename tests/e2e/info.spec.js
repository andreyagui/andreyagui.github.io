import { test, expect } from '@playwright/test';

test('skills shows the eight stack groups', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#skills .skill-group')).toHaveCount(8);
});

test('education shows the degree, the ML program and two languages', async ({ page }) => {
  await page.goto('/');
  const education = page.locator('#education');
  await expect(education).toContainText('Universidad de Costa Rica');
  await expect(education).toContainText('Cenfotec');
  await expect(education.locator('.lang-item')).toHaveCount(2);
});

test('contact exposes email, LinkedIn and GitHub but never a phone number', async ({ page }) => {
  await page.goto('/');
  const contact = page.locator('#contact');
  await expect(contact.locator('a[href="mailto:aguirreandrey@gmail.com"]')).toBeVisible();
  await expect(contact.locator('a[href="https://www.linkedin.com/in/andrey-aguirre-970a30134"]')).toBeVisible();
  await expect(contact.locator('a[href="https://github.com/andreyagui"]')).toBeVisible();
  await expect(page.locator('a[href^="tel:"]')).toHaveCount(0);
  await expect(page.locator('main')).not.toContainText('7106');
});

test('footer shows the current year', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#site-footer')).toContainText(String(new Date().getFullYear()));
});

test('scroll spy marks contact at the bottom of the page', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
  await expect(page.locator('a.nav-link[data-section="contact"]')).toHaveAttribute('aria-current', 'true');
});
