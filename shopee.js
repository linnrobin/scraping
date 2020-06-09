const rp = require("request-promise");
const $ = require("cheerio");
const url = "https://shopee.co.id/kuke_store";

rp(url)
  .then(function (html) {
    //success!
    const result = [];
    $(html)
      //   .find(".shop-search-result-view > row > .shop-search-result-view__item")
      //   .find("body")
      .each(function (index, element) {
        result.push($(element)[0].attribs);
        // result.push($(element));
      });
    console.log(result);
    // const wikiUrls = [];
    // for (let i = 0; i < 45; i++) {
    //   wikiUrls.push($("b > a", html)[i].attribs.href);
    // }
    // console.log(wikiUrls);
    // console.log($("a", html)[0].attribs);
  })
  .catch(function (err) {
    //handle error
  });
