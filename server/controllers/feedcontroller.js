const feedItems = []; 
let nextId = 1;

exports.getAllFeedItems = (req, res) => {
  res.json(feedItems);
};

exports.saveFeedItem = (req, res) => {
  const { title, body, linkUrl, imageUrl } = req.body;
  const newItem = { id: nextId++, title, body, linkUrl, imageUrl };
  feedItems.push(newItem);
  res.status(201).json(newItem);
};

exports.getFeedItemById = (req, res) => {
  const id = parseInt(req.params.id);
  const item = feedItems.find(i => i.id === id);
  item ? res.json(item) : res.status(404).send('Not found');
};

exports.deleteFeedItemById = (req, res) => {
  const id = parseInt(req.params.id);
  const index = feedItems.findIndex(i => i.id === id);
  if (index !== -1) {
    feedItems.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).send('Not found');
  }
};

exports.updateFeedItemById = (req, res) => {
  const id = parseInt(req.params.id);
  const item = feedItems.find(i => i.id === id);
  if (item) {
    const { title, body, linkUrl, imageUrl } = req.body;
    if (title) item.title = title;
    if (body) item.body = body;
    if (linkUrl) item.linkUrl = linkUrl;
    if (imageUrl) item.imageUrl = imageUrl;
    res.json(item);
  } else {
    res.status(404).send('Not found');
  }
};
