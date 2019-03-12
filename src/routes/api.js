var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/daum/:query', (req, res, next) => {
  axios.get(encodeURI(`http://suggest.search.daum.net/sushi/pc/get?q=${req.params.query}`))
  .then(function (response) {
    res.send([req.params.query, response.data.subkeys]);
  })
  .catch(function (error) {
    console.log(error);
  });
});

router.get('/namuwiki/:query', (req, res, next) => {
  axios.get(encodeURI(`https://namu.wiki/complete/${req.params.query}`))
  .then(function (response) {
    res.send([req.params.query, response.data]);
  })
  .catch(function (error) {
    console.log(error);
  });
});

module.exports = router;
