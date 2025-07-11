// tests/login.spec.ts
import { test, expect } from '@playwright/test';

// Define your test
test('Successful Login Test', async ({ page }) => {
    // 1. Navigate to the login page
    // Playwright automatically handles waiting for the page to load
    await page.goto('https://example.com/login'); // You'd configure 'baseURL' in playwright.config.ts

    // 2. Enter Credentials
    // Playwright's auto-wait ensures elements are ready before filling
    await page.getByLabel('Username').fill('myuser'); // Preferred: getByLabel for input fields
    await page.getByLabel('Password').fill('mypassword');

    // 3. Click Login Button
    // Playwright's auto-wait ensures the button is clickable
    await page.getByRole('button', { name: 'Login' }).click(); // Preferred: getByRole for buttons

    // 4. Verify User Is Logged In
    // Playwright's assertions are auto-retrying
    await expect(page.getByText('Welcome, myuser!')).toBeVisible(); // Asserts text is visible
    // You could also assert URL, presence of elements etc.
    // await expect(page).toHaveURL(/dashboard/);
});