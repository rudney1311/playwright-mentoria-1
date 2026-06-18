// @ts-check
import { test, expect } from '@playwright/test';

test('tenho um título', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Verifica se o título da página contém a palavra "Playwright".
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Clica no link "Get started" na página inicial.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Verifica se a página tem um cabeçalho com o nome "Installation".
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
