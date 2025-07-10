const express = require('express');
const path = require('path');
const app = express();


app.use(express.static('client/public'));


app.get('/', function (req, res) {
  res.sendFile('index.html', { root: './client/views' });
});


app.get('/feed', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/views/feed.html'));
});


app.listen(1337, () => console.log('Listening on port 1337.'));
