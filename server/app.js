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
  console.log('GET REVIEWS');
  axios.get(`http://localhost:3001/api/reviews/${req.params.id}/details`)
      .then((result) => {
        res.send(result.data);
      })
      .catch((err) => console.error('GET REVIEWS FAILED: ', err));
});

app.get(`/api/sizes/:id`, (req, res) => {
  console.log('GET SIZES');
  axios.get(`http://localhost:3002/api/sizes/${req.params.id}`)
      .then((result) => {
        res.send(result.data);
      })
      .catch((err) => console.error('GET PRODUCT SIZES FAILED: ', err));
});

// app.get(`/api/product/:id`, (req, res) => {
//   console.log('GET ABOUT');
//   axios.get(`http://localhost:3003/api/product/${req.params.id}`)
//       .then((result) => {
//         res.send(result.data);
//       })
//       .catch((err) => console.error('GET ABOUT FAILED: ', err));
// });

// app.get(`/api/images/type/size/:id`, (req, res) => {
//   console.log('GET IMAGES');
//   axios.get(`http://localhost:3004/api/images/type/size/${req.params.id}`)
//       .then((result) => {
//         res.send(result.data);
//       })
//       .catch((err) => console.error('GET IMAGES FAILED: ', err));
// });

app.listen(PORT, () => {
  console.log(`Proxy is listening at http://localhost:${PORT}`);
});