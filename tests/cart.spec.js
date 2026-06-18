// @ts-check
import { test, expect } from '@playwright/test';

test('carrinho de compras exibe produtos e subtotal', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/', { waitUntil: 'domcontentloaded' });

  await expect(page.getByRole('heading', { name: 'Shopping Cart' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Fit-Flare Dress' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Midi Dress' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Tulip Dress' })).toBeVisible();
  await expect(page.getByText('Subtotal:')).toBeVisible();
  await expect(page.getByText('$107.00')).toBeVisible();

  await page.goto('https://automationpratice.com.br/cart', { waitUntil: 'domcontentloaded' });

  await expect(page).toHaveURL(/\/cart$/);
  await expect(page.locator('h4', { hasText: 'Shopping Cart' })).toBeVisible();
});