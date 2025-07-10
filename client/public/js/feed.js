document.addEventListener('DOMContentLoaded', function () {
  
  document.getElementById('portal_button').addEventListener('click', function () {
    window.location.href = 'https://rustclash.com';
  });

  
  currentStories.forEach(displayItem);
});

function feedItem(title, body, linkUrl, imageUrl) {
  return { title, body, linkUrl, imageUrl };
}

const currentStories = [
  feedItem(
    "Rust Story 1",
    "Reports of an F-15 is circling the map without proper clearance",
    "https://example.com/1",
    "https://lone.design/wp-content/uploads/2024/11/myf15-2-720x431.jpg"
  ),
  feedItem(
    "Rust Story 2",
    "Sources say Kobe ran out of lowgrade and crashed his minicopter while on his way to oilrig.",
    "http://example.com/2",
    "https://img.ifunny.co/images/3ec28eabad766d6e2f570fc91d2a629c2398e1a250bbee08bdd8c81b0bb88eb7_1.jpg"
  ),
  feedItem(
    "Rust Story 3",
    "Fresh spawns report that on the last day of wipe the Bradley Tank was on road killing inoccent fresh spawns.",
    "http://example.com/3",
    "https://images.squarespace-cdn.com/content/v1/5420d068e4b09194f76b2af6/1503543235927-6W5RD8II4YUOIKT5VU95/252490_20170823215223_1.png?format=500w"
  )
];

function displayItem(item) {
  const newsfeed = document.getElementById('newsfeed');
  newsfeed.innerHTML += `
    <div class="feed-item">
      <h3>${item.title}</h3>
      <p>${item.body}</p>
      <a href="${item.linkUrl}" target="_blank">
        <img 
          class="feedImage"
          src="${item.imageUrl}" 
          alt="${item.title}"
        >
      </a>
    </div>
  `;
}
