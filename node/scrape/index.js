const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.shanghairanking.com/rankings/gras/2021/RS0102");

  const processTable = async () => {
    // process the data in the table
    const data = await page.evaluate(
      () => document.querySelector("*").outerHTML
    );
    const $ = cheerio.load(data);
    const table = $("#content-box > div.rk-table-box > table > tbody > tr");
    table.each((_, element) => {
      let text = $(element).text().split("\n");
      let ranking = text[1].trim();
      let university = text[3].trim();
      let totalScore = text[5].trim();
      let categoryScore = text[7].trim();
      console.log(`${ranking}|${university}|${totalScore}|${categoryScore}`);
    });

    // check current score type
    const btn = $(
      "#content-box > div.rk-table-box > table > thead > tr > th:nth-child(5) > div > div.rank-select > div.rk-tooltip > ul > li"
    );
    btn.each((_, element) => {
      let el = $(element);
      if (el.hasClass("select-active")) {
        console.log(el.text());
      }
    });
  };
  let lastPage = 17;
  for (let i = 0; i < lastPage; ++i) {
    await processTable();
    await page.click("#content-box > ul > li.ant-pagination-next");
  }
})();
