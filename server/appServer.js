const express = require('express');
const path = require('path');
const app = express();

const feedRoutes = require('./routes/feedRoutes'); 

app.use(express.static(path.join(__dirname, '../client/public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: './client/views' });
});

app.get('/feed', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/views/feed.html'));
});


app.use('/api/feed', feedRoutes);

const PORT = 1337;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

