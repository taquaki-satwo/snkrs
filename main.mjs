import puppeteer from 'puppeteer';
import moment from 'moment';
import dotenv from 'dotenv';

dotenv.config();
const CONFING = process.env;

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    slowMo: 50,
  });
  const page = await browser.newPage();

  await page.setViewport({
    width: 1200,
    height: 800,
  });
  await page.goto(`${CONFING.TARGET_URL}`);
  // await page.click('a[aria-label*="在庫あり"]');
  await page.screenshot({ path: `./screenshot/${moment().format('YYYYMMDDHHmmssSSS')}.png`, fullPage: true });
  await browser.close();
})();

process.on('unhandledRejection', console.dir);
