const express = require('express');
const app = express();
const PORT = 3000;
const axios = require('axios');

app.use('/:id', express.static('public'));

app.get(`/api/sizes/:id`, (req, res) => {
  axios.get(`http://localhost:3002/api/sizes/${req.params.id}`)
      .then((result) => {
        console.log('PROXY-API CALL: ', result.data)
        res.send(result.data);
      })
      .catch((err) => console.error('GET PRODUCT SIZES FAILED: ', err));
});

app.listen(PORT, () => {
  console.log(`Proxy is listening at http://localhost:${PORT}`);
});