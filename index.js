// spectacular modules:
const scrape = require("website-scraper");
const PuppeteerPlugin = require("website-scraper-puppeteer");
const path = require("path");

scrape({
  // paste it down here the URL(s) of the site(s) that you want to clone:
  urls: ["https://www.hanime.tv"],
  // Specify the path inside this folder where the content should be saved
  directory: path.resolve(__dirname, "output"),
  // Load the Puppeteer plugin
  plugins: [
    new PuppeteerPlugin({
      launchOptions: {
        headless: true,
      },
    }),
  ],
});
