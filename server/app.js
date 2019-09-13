const express = require('express');
const productData = require('./storeProducts');
const cors = require('cors');
const fetch = require('node-fetch');

var cheerio = require("cheerio");
var request = require('request');

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/products', (req, res) => {
  res.json(JSON.stringify(productData));
});

app.get('/products/:id', async (req, res) => {
  const searchQuery = req.params.id.split(" ").join("+");
  // await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.SEARCH_CODE}&q=${searchQuery}+reviews`)
  //   .then(resData => resData.json())
  //   .then(resData => res.json(resData));

  request({
    method: 'GET',
    url: `https://www.google.com/search?q=${searchQuery}+review`,
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"
    }
  }, (err, response, body) => {
    const $ = cheerio.load(body);
    const a = $(".mw").text();
  
    if(err) return console.error(err);

    res.send(JSON.stringify(a));
  });
})

app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
