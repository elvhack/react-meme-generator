const puppeteer = require("puppeteer");

export async function generateImage() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(
    `file:///Users/elvan/Documents/Apprentissage/React/meme-generator/build/index.html`
  );
  await page.setViewport({ width: 1920, height: 1080 });
  await page.screenshot({ path: "./image_generee.png" });

  await browser.close();
}
