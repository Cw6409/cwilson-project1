class FeedItem {
  constructor(id, title, body, linkUrl, imageUrl) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
  }
}

let feedItems = []; 

function createFeedItem(title, body, linkUrl, imageUrl) {
  const id = feedItems.length.toString(); 
  const newItem = new FeedItem(id, title, body, linkUrl, imageUrl);
  feedItems.push(newItem);
  return newItem;
}

export default {
  feedItems,
  createFeedItem
};
