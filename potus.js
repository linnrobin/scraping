const rp = require("request-promise");
const $ = require("cheerio");
const url =
  "https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States";

rp(url)
  .then(function (html) {
    //success!
    const wikiUrls = [];
    for (let i = 0; i < 45; i++) {
      wikiUrls.push($("b > a", html)[i].attribs.href);
    }
    console.log(wikiUrls);
  })
  .catch(function (err) {
    //handle error
  });
