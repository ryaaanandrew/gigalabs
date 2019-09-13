var cheerio = require("cheerio");
var request = require('request');

request({
  method: 'GET',
  url: 'https://www.google.com/search?q=define+love',
  headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"
  }
}, function(err, response, body) {

  if (err) {
    return console.error(err);
  }

  var $ = cheerio.load(body);

  var a = $(".mw").text();
  console.log(a);
});