const express = require('express');

const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: '3vuVBb2ZygPXRtmpQPmzfxfk1',
    consumer_secret: 'fbxiuEJRLIM9oam2nptEuPtZaLLYwakdjOn4wdR1QtQmmc82wI',
    access_token_key: '1225138407963271168-EV1Qmr3jHjpewAmQmOIE5VqBMwXPLY',
    access_token_secret: 'hAq8O3d7VjsB9W5oljgZ6N2LQ3L0MNLXB4k1ixrzrGtb5'
  });

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/tweets', function (req, res) {
    var params = {q: 'q=%23IoT', count: 100};
    client.get('search/tweets', params, function(error, tweets, response) {
        if (!error) {
          return res.send(tweets.statuses);
        }
        return res.send(error);
    })
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => (
    console.log(`Server listening at localhost:${port}`)
))