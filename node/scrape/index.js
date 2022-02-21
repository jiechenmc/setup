const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

// axios
//   .get("https://www.shanghairanking.com/rankings/gras/2021/RS0102")
//   .then((res) => {
//     const $ = cheerio.load(res.data);
//     const processTable = () => {
//       const table = $("#content-box > div.rk-table-box > table > tbody > tr");
//       table.each((index, element) => {
//         let text = $(element).text().split("\n");
//         let ranking = text[1].trim();
//         let university = text[3].trim();
//         let totalScore = text[5].trim();
//         let categoryScore = text[7].trim();
//         console.log(`${ranking}|${university}|${totalScore}|${categoryScore}`);
//       });
//     };
//     const btn = $(
//       "#content-box > div.rk-table-box > table > thead > tr > th:nth-child(5) > div > div.rank-select > div.rk-tooltip > ul"
//     );
//     console.log(btn.html());
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const scrapeData = async () => {
  try {
    const browser = await puppeteer.launch({});
  } catch (error) {
    console.log(error);
  }
};

scrapeData();
