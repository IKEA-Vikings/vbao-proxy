const express = require('express');
const app = express();
const PORT = 3000;
const axios = require('axios');
const path = require('path');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.static(path.resolve('public')));

app.get('/:id', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

app.get(`/api/reviews/:id/details`, (req, res) => {
  axios.get(`http://100.25.191.161/api/reviews/${req.params.id}/details`)
      .then((result) => {
        res.send(result.data);
      })
      .catch((err) => console.error('GET REVIEWS FAILED: ', err));
});

app.get(`/api/sizes/:id`, (req, res) => {
  axios.get(`http://18.221.34.3:3002/api/sizes/${req.params.id}`)
      .then((result) => {
        res.send(result.data);
      })
      .catch((err) => console.error('GET PRODUCT SIZES FAILED: ', err));
});

app.get(`/api/product/:id`, (req, res) => {
  axios.get(`http://3.86.58.21:3003/api/product/${req.params.id}`)
      .then((result) => {
        res.send(result.data);
      })
      .catch((err) => console.error('GET ABOUT FAILED: ', err));
});

app.get(`/images/org/:id`, (req, res) => {
  axios.get(`http://54.67.28.46:3004/images/org/${req.params.id}`)
      .then((result) => {
        res.send(result.data);
      })
      .catch((err) => console.error('GET IMAGES FAILED: ', err));
});

app.get(`/similar-products-by-views/:id`, (req, res) => {
  axios.get(`http://18.222.25.224:3005/similar-products-by-views/${req.params.id}`)
      .then((result) => {
        res.send(result.data);
      })
      .catch((err) => console.error('GET OTHERS ALSO VIEWED FAILED: ', err));
});

app.listen(PORT, () => {
  console.log(`Proxy is listening at port ${PORT}`);
});