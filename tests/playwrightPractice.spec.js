
import { test } from '@playwright/test';

test('Youtube Search', async ({ page }) => {

  await page.goto("https://www.youtube.com/");



  //page.locator("//input[@id='search']");

  let searchbox = page.locator("//input[@id='search']");

  await searchbox.click();

  await searchbox.fill("Cydeo");

  searchbox.press('Enter');



 let firstResult=  page.locator("(//a[@id='video-title'])[1]" );

 await firstResult.click();

 //await page.waitForTimeout(10000);

});


/*
<input id="search" autocapitalize="none" autocomplete="off" autocorrect="off" name="search_query" tabindex="0" type="text" spellcheck="false" placeholder="Search" aria-label="Search" role="combobox" aria-haspopup="false" aria-autocomplete="list" dir="ltr" class="ytd-searchbox" style="outline: none;">
*/

//input[@name='search_query']
