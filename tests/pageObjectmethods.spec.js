import {expect, test} from "@playwright/test";

test('Getting the title of the page', async ({ page }) => {
    // go to https://practice.cydeo.com/
    await page.goto("https://practice.cydeo.com/");

    // get the title of the page
   let  actualTitle = await page.title();
 console.log(actualTitle);
    // assert the title is correct
    expect(actualTitle).toBe("Practice");

});

test('Getting the current url of the page', async ({ page }) => {
    
    await page.goto("https://practice.cydeo.com/");
    
    // get the url of the page
        let  currentUrl = page.url();
console.log(currentUrl);
    // assert the url is correct
    expect(currentUrl).toBe("https://practice.cydeo.com/");

    await page.waitForTimeout(3000);
});

test('Set the window size of the browser', async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");

    await page.setViewportSize({ width: 1850, height: 1080 });

   


});
