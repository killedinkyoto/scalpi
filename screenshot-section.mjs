import puppeteer from 'puppeteer';

const [,, url, selector, label] = process.argv;
const browser = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', args: ['--no-sandbox'], headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 430, height: 900, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'networkidle0' });

if (selector) {
  const el = await page.$(selector);
  if (el) {
    const box = await el.boundingBox();
    await page.screenshot({ path: `c:/Users/jomat_nweuhlk/Desktop/ScalpiCode/temporary screenshots/screenshot-section-${label||'out'}.png`, clip: { x: box.x, y: Math.max(0, box.y - 16), width: box.width, height: Math.min(box.height + 32, 1400) } });
    console.log('done');
  }
}
await browser.close();
