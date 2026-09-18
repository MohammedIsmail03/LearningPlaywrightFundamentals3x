import {test, expect} from '@playwright/test';
test('Verify we are able to see make appointment text is shown after login', async({page})=>{
    await page.goto('https://katalon-demo-cura.herokuapp.com/');
    await page.locator("#btn-make-appointment").click();
    await page.waitForLoadState('domcontentloaded');
    await page.locator("#txt-username").fill("John Doe");
    await page.locator("#txt-password").fill("ThisIsNotAPassword");
    await page.locator("#btn-login").click();
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator(".col-sm-12.text-center")).toHaveText("Make Appointment");

});