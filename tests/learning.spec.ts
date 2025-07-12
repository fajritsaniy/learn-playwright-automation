import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // AB Testing
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'A/B Testing' }).click();
  await expect(page.getByText('Also known as split testing.')).toBeVisible();

  // Add/Remove Elements
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Add/Remove Elements' }).click();
  await page.getByRole('button', { name: 'Add Element' }).click();
  await expect(page.getByRole('button', { name: 'Delete' })).toBeVisible();
  await page.getByRole('button', { name: 'Add Element' }).click();
  await expect(page.getByRole('button', { name: 'Delete' }).nth(1)).toBeVisible
  await page.getByRole('button', { name: 'Delete' }).nth(1).click();
  await expect(page.getByRole('button', { name: 'Delete' }).nth(1)).toBeHidden();
  await page.getByRole('button', { name: 'Delete' }).click();
  await expect(page.getByRole('button', { name: 'Delete' })).toBeHidden();
});