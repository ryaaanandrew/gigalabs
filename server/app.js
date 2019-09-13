const express = require('express');
const productData = require('./storeProducts');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = 3001;

app.use(cors());


app.get('/products', (req, res) => {
  res.json(JSON.stringify(productData));
});

app.get('/products/:id', async (req, res) => {
  const searchQuery = req.params.id.split(" ").join("+");
  console.log(process.env.API_KEY)
  await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.SEARCH_CODE}&q=${searchQuery}+reviews`)
    .then(resData => resData.json())
    .then(resData => res.json(resData));
})

app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
