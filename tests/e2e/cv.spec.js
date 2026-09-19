import { test, expect } from '@playwright/test';

for (const lang of ['es', 'en']) {
  test(`CV PDF (${lang}) is served as a real PDF`, async ({ request }) => {
    const response = await request.get(`/assets/cv/andrey-aguirre-cv-${lang}.pdf`);
    expect(response.ok()).toBe(true);
    expect(response.headers()['content-type']).toContain('application/pdf');
    expect((await response.body()).subarray(0, 5).toString()).toBe('%PDF-');
  });
}

test('print CV page renders every section and no phone number', async ({ page }) => {
  await page.goto('/cv.html?lang=en');
  await expect(page.locator('body')).toHaveAttribute('data-ready', 'true');
  await expect(page.locator('.cv-section')).toHaveCount(5);
  await expect(page.locator('.cv-name')).toHaveText('Andrey Aguirre Obregón');
  await expect(page.locator('#cv')).not.toContainText('7106');
});

test('both download buttons point at the PDF for the current language', async ({ page }) => {
  await page.goto('/');
  const links = page.locator('a[data-cv-link]');
  await expect(links).toHaveCount(2);
  for (const link of await links.all()) {
    await expect(link).toHaveAttribute('href', 'assets/cv/andrey-aguirre-cv-es.pdf');
    await expect(link).toHaveAttribute('download', '');
  }
});
