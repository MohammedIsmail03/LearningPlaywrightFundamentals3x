import {test, expect} from '@playwright/test';

test('Task for 24-sep-2026', async ({page}) => {
   await page.goto("https://app.thetestingacademy.com/playwright/webtable");
   ////table[@aria-label="Employee Management System table"]/tbody/tr[3]/td[2]
   const firstPart = "//table[@aria-label='Employee Management System table']/tbody/tr[";
   const secondPart = "]/td[";
   const thirdPart = "]";

   const rowCount = await page.locator("//table[@aria-label=\"Employee Management System table\"]/tbody/tr").count();
   const colCount = await page.locator("//table[@aria-label=\"Employee Management System table\"]/tbody/tr[2]/td").count();

   for(let i=1; i<=rowCount; i++){

    for(let j=1; j<=colCount; j++){
        const dynamicPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
        const data = await page.locator(dynamicPath).innerText();
        //console.log(data);
        if(data.includes("Rohan.Mehta")){
            const checkBoxPath = `${dynamicPath}/preceding-sibling::td`;
            await page.locator(checkBoxPath).click();
        
    }
    }
    
}
await page.pause();
});