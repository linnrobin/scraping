var scraperjs = require("scraperjs");
scraperjs.StaticScraper.create("https://shopee.co.id/kuke_store")
  .scrape(function ($) {
    return $(".shopee-progress-bar")
      .map(function () {
        return $(this).text();
      })
      .get();
  })
  .then(function (news) {
    console.log(news);
  });
